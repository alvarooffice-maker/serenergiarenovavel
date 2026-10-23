// Edge Function pública que só insere leads do simulador do site no SER Hub.
// Deploy (sem verificação de JWT, pois é chamada pelo site):
//   supabase functions deploy site-lead --project-ref aickvgjrieeirybtqemh --no-verify-jwt
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.116.0';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const ORIGENS = [
  'https://serenergiarenovavel.com.br',
  'https://www.serenergiarenovavel.com.br',
  'http://localhost:4321',
];
const CANAL = 'site-simulador';
const TIPOS: Record<string, string> = { residencia: 'Residência', comercio: 'Comércio', rural: 'Rural' };
const LIMITE_GLOBAL_10MIN = 20;

const supa = createClient(SUPABASE_URL, SERVICE_ROLE, {
  auth: { persistSession: false, autoRefreshToken: false },
});

Deno.serve(async (req) => {
  const origin = req.headers.get('Origin') ?? '';
  const cors = {
    'Access-Control-Allow-Origin': ORIGENS.includes(origin) ? origin : ORIGENS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type',
    'Vary': 'Origin',
  };
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  if (req.method !== 'POST') return json({ error: 'Método não permitido' }, 405);
  if (!ORIGENS.includes(origin)) return json({ error: 'Origem não permitida' }, 403);
  if (Number(req.headers.get('content-length') ?? 0) > 4000) return json({ error: 'Requisição grande demais' }, 413);

  const b = await req.json().catch(() => null);
  if (!b || typeof b !== 'object') return json({ error: 'JSON inválido' }, 400);

  // Anti-spam: campo isca preenchido ou formulário enviado rápido demais → finge sucesso e descarta.
  if (b.empresa || Number(b.tempo_ms) < 3000) return json({ ok: true });

  const txt = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().replace(/\s+/g, ' ').slice(0, max) : '');
  const nome = txt(b.nome, 120);
  const local = txt(b.local, 120);
  const telefone = String(b.telefone ?? '').replace(/\D/g, '');
  const conta = Number(b.conta);
  const tipo = TIPOS[String(b.tipo)];
  const consumo = Math.round(Number(b.consumo_kwh));
  const placas = Math.round(Number(b.placas));
  const kwp = Number(b.kwp);

  if (nome.length < 2 || local.length < 2) return json({ error: 'Nome e local são obrigatórios' }, 400);
  if (!/^\d{10,11}$/.test(telefone)) return json({ error: 'Telefone inválido' }, 400);
  if (!(conta >= 50 && conta <= 200000) || !tipo) return json({ error: 'Simulação inválida' }, 400);
  if (b.lgpd !== true) return json({ error: 'Consentimento obrigatório' }, 400);
  if (!(consumo > 0 && consumo < 1_000_000) || !(placas > 0 && placas < 20000) || !(kwp > 0 && kwp < 20000)) {
    return json({ error: 'Simulação inválida' }, 400);
  }

  const telFmt = `(${telefone.slice(0, 2)}) ${telefone.slice(2, -4)}-${telefone.slice(-4)}`;
  const desde = (min: number) => new Date(Date.now() - min * 60_000).toISOString();

  // Limite global contra rajadas.
  const { count: recentes } = await supa.from('leads').select('id', { count: 'exact', head: true })
    .eq('canal', CANAL).gte('criado_em', desde(10));
  if ((recentes ?? 0) >= LIMITE_GLOBAL_10MIN) return json({ error: 'Muitas solicitações, tente mais tarde' }, 429);

  // Mesmo telefone nas últimas 24 h: não duplica o card no pipeline.
  const { data: repetido } = await supa.from('leads').select('id')
    .eq('canal', CANAL).eq('telefone', telFmt).gte('criado_em', desde(24 * 60)).limit(1);
  if (repetido?.length) return json({ ok: true });

  const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const obs = [
    'Lead do simulador do site.',
    `Conta média: ${brl(conta)} | Imóvel: ${tipo} | Local: ${local}`,
    `Simulação: ${consumo} kWh/mês, ${placas} placas, ${kwp.toFixed(2).replace('.', ',')} kWp`,
    `Consentimento LGPD em ${new Date().toISOString()}`,
  ].join('\n');

  const { data: lead, error } = await supa.from('leads').insert({
    nome, telefone: telFmt, kwh: consumo, canal: CANAL, status: 'em_contato', obs,
  }).select('id').single();
  if (error) {
    console.error('[site-lead] insert', error.message);
    return json({ error: 'Falha ao registrar' }, 500);
  }

  await supa.from('historico').insert({
    tabela: 'leads', registro_id: String(lead.id), usuario_id: null, usuario_nome: 'Site (simulador)',
    acao: 'criado', descricao: `Lead criado pelo simulador do site: ${nome}`,
  });

  return json({ ok: true });
});
