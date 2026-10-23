# Site institucional — SER Energia Renovável

Landing page da SER Energia Renovável, feita em [Astro](https://astro.build) (`output: 'static'`).
Ela substitui o antigo `index.html` único, que está guardado em `legacy/index.html` para consulta.

## Estrutura

```
src/
  layouts/Base.astro        <head>, SEO, Open Graph/Twitter e o script de scroll-reveal
  pages/index.astro         monta a página com as seções
  components/               uma seção por arquivo (Nav, Hero, Stats, Services, Differentials,
                            HowItWorks, CtaBand, Footer, Background, WhatsAppFab), cada uma com CSS próprio
  styles/global.css         reset, variáveis de cor, títulos de seção, botões e animações compartilhadas
  data/site.ts              WhatsApp, Instagram, e-mail, CNPJ e o ícone do WhatsApp
  data/simulador.ts         parâmetros do simulador (tarifa, geração por placa, R$/kWp etc.)
  data/produtos.ts          textos, FAQ e mensagem de WhatsApp de cada solução (gera /solucoes/<slug>/)
  data/faq.ts               perguntas frequentes da home (também viram schema FAQPage)
  data/provaSocial.ts       Reels, fotos de instalação, avaliações do Google e marcas (vazio = não aparece)
  pages/privacidade.astro   Política de Privacidade (LGPD)
  assets/ser_logo.jpg       logo (o Astro gera versões webp otimizadas no build)
legacy/                     página original (não entra no build)
supabase/functions/site-lead/  função que grava o lead do simulador no SER Hub
```

Textos de serviços, diferenciais, etapas e números ficam em arrays no topo de cada componente.

## Simulador e leads

O simulador calcula no navegador (parâmetros em `src/data/simulador.ts`) e, quando a pessoa pede o resultado
completo, envia nome, WhatsApp, bairro/cidade e a simulação para a Edge Function `site-lead`. A função grava na
tabela `leads` do SER Hub (etapa Lead, `status = em_contato`, `canal = site-simulador`, conta e tipo de imóvel em `obs`).
A chave de serviço fica só na função; o site não tem nenhuma chave.

Proteções da função: aceita só a origem do site, campo isca (honeypot), tempo mínimo de preenchimento, validação dos
campos, no máximo 20 leads do site a cada 10 minutos e não duplica o mesmo telefone em 24 horas.

Publicar a função (uma vez, e a cada alteração):

```bash
supabase functions deploy site-lead --project-ref aickvgjrieeirybtqemh --no-verify-jwt
```

Para apontar o site para outra URL, defina `PUBLIC_LEAD_ENDPOINT` no ambiente do build.

## Desenvolvimento

Precisa de Node 22.12 ou mais novo.

```bash
npm install
npm run dev        # http://localhost:4321
```

No app do Claude: preview `site-institucional` (e `site-institucional-legacy` na porta 4322 para comparar com o original).

## Build

```bash
npm run build      # gera dist/
npm run preview    # serve o dist/ localmente
```

## Deploy

Repositório: `alvarooffice-maker/serenergiarenovavel` (GitHub Pages, domínio em `public/CNAME`).
Cada push na `main` roda `.github/workflows/deploy.yml`, que gera o build e publica o `dist/`.

- `public/portal.html` (Portal do Cliente), os logos e o `CNAME` são copiados sem alteração para o site.
- O domínio está em `site` dentro do `astro.config.mjs` (`https://serenergiarenovavel.com.br`).

## Observações

- Usa o Astro 6 porque o Astro 7 exige Node 22.23.4 ou mais novo, e a máquina tem o 22.17. O `npm audit` aponta
  alertas do Astro e do sharp que se aplicam a SSR, a parâmetros vindos do usuário ou a imagens enviadas por
  terceiros. Este site é estático, com conteúdo e imagens próprios processados só no build, então eles não
  se aplicam. Quando o Node for atualizado, rode `npm install astro@latest`.
