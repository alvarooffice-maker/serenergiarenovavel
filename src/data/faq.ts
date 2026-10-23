import type { Pergunta } from './produtos';

// Perguntas frequentes da home (geram também o schema FAQPage).
export const FAQ: Pergunta[] = [
  {
    q: 'Quanto tempo leva a homologação?',
    a: 'A homologação é a aprovação do sistema pela distribuidora (no Pará, a Equatorial). O prazo depende da análise da distribuidora e da troca do medidor. Cuidamos de toda a documentação e acompanhamos o processo para que ele ande no menor prazo possível. A economia começa depois que o sistema é homologado e ligado.',
  },
  {
    q: 'Dá para financiar?',
    a: 'Sim. Há linhas de financiamento para energia solar em bancos e cooperativas, para pessoa física, empresa e produtor rural. Em muitos casos a parcela fica próxima do valor que você economiza na conta.',
  },
  {
    q: 'O sistema precisa de manutenção?',
    a: 'A manutenção é simples: limpeza periódica das placas e verificação do funcionamento pelo aplicativo de monitoramento. Também oferecemos atendimento pós-venda.',
  },
  {
    q: 'E em dia nublado ou chuvoso?',
    a: 'As placas continuam gerando com céu nublado, só que menos. O sistema é dimensionado pela média de geração do ano, e o que sobra nos dias de sol vira crédito para os dias de menor geração.',
  },
  {
    q: 'Moro em apartamento. Posso ter energia solar?',
    a: 'Se não houver telhado disponível, a assinatura solar é uma opção: você recebe créditos de uma usina sem instalar nada. Outra possibilidade é instalar em um imóvel seu e usar os créditos no apartamento, se ambos estiverem no seu nome.',
  },
  {
    q: 'Qual é a garantia?',
    a: 'Os equipamentos têm garantia do fabricante, e as placas costumam ter garantia de desempenho de longo prazo. A proposta informa as garantias de cada equipamento e da instalação.',
  },
  {
    q: 'Preciso de bateria?',
    a: 'Não. O sistema conectado à rede usa a própria rede como "bateria" por meio dos créditos de energia. A bateria é indicada para quem quer manter aparelhos funcionando durante quedas de energia.',
  },
  {
    q: 'O que é a assinatura solar?',
    a: 'É uma forma de economizar sem investir em equipamentos: você recebe créditos de energia gerados em uma usina e paga uma assinatura com desconto em relação à tarifa da distribuidora.',
  },
];
