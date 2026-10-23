// Uma entrada por card de solução. Cada uma gera a página /solucoes/<slug>/.

export interface Pergunta { q: string; a: string }

export interface Produto {
  slug: string;
  titulo: string;
  /** Texto curto do card na home. */
  resumo: string;
  /** Frase de abertura da página do produto. */
  chamada: string;
  /** Parágrafos explicativos. */
  explicacao: string[];
  /** Para quem é indicado. */
  indicado: string[];
  /** Como funciona, em passos curtos. */
  inclui: string[];
  faq: Pergunta[];
  /** Mensagem pré-preenchida do WhatsApp. */
  whatsapp: string;
  /** Conteúdo interno do <svg viewBox="0 0 24 24"> do ícone. */
  icone: string;
}

export const PRODUTOS: Produto[] = [
  {
    slug: 'residencial',
    titulo: 'Solar Residencial',
    resumo: 'Economize até 85% na conta de luz da sua casa. Projeto personalizado, instalação segura e rápido retorno do investimento.',
    chamada: 'Gere a energia da sua casa no seu telhado e reduza a conta de luz em até 85%.',
    explicacao: [
      'O sistema fotovoltaico converte a luz do sol em energia elétrica. O que a casa não consome na hora é injetado na rede da distribuidora e vira crédito em kWh, que abate o consumo à noite e nos meses seguintes.',
      'Dimensionamos o sistema a partir do histórico da sua conta de luz, do espaço disponível no telhado e do seu perfil de consumo, para você não pagar por placas que não precisa.',
    ],
    indicado: [
      'Casas com conta de luz alta, que pesa no orçamento',
      'Quem quer se proteger dos reajustes da tarifa',
      'Quem planeja comprar ar-condicionado, carro elétrico ou aumentar o consumo',
    ],
    inclui: [
      'Análise da conta e visita técnica',
      'Projeto elétrico e proposta com a economia estimada',
      'Instalação por equipe própria',
      'Homologação junto à distribuidora',
      'Monitoramento da geração pelo aplicativo',
    ],
    faq: [
      { q: 'A conta de luz fica zerada?', a: 'Não. A distribuidora continua cobrando o custo de disponibilidade (taxa mínima) e a iluminação pública. Por isso falamos em economia de até 85%, e não em conta zero.' },
      { q: 'Meu telhado aguenta as placas?', a: 'Na visita técnica avaliamos a estrutura, a inclinação e o sombreamento. Se for preciso reforço ou outra solução de fixação, isso aparece na proposta.' },
      { q: 'Posso aumentar o sistema depois?', a: 'Sim. Se o consumo subir, é possível adicionar placas e, dependendo do caso, trocar ou complementar o inversor. A ampliação também passa por homologação.' },
    ],
    whatsapp: 'Olá! Quero um orçamento de energia solar para minha casa.',
    icone: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  },
  {
    slug: 'comercial',
    titulo: 'Solar Comercial',
    resumo: 'Reduza os custos operacionais do seu negócio com sistemas de médio e grande porte, aumentando sua competitividade.',
    chamada: 'Transforme a conta de luz da empresa em investimento com retorno previsível.',
    explicacao: [
      'Comércios, clínicas, escritórios e indústrias consomem mais energia durante o dia, justamente quando as placas geram mais. Isso torna o retorno do investimento ainda mais atrativo.',
      'Fazemos o estudo de viabilidade com base nas faturas da empresa, incluindo a modalidade tarifária, e apresentamos o retorno estimado do investimento.',
    ],
    indicado: [
      'Comércios, clínicas, escolas, escritórios e galpões',
      'Empresas com consumo diurno alto (refrigeração, ar-condicionado, máquinas)',
      'Negócios que querem reduzir custo fixo e mostrar compromisso com sustentabilidade',
    ],
    inclui: [
      'Estudo de viabilidade e retorno do investimento',
      'Projeto em telhado, laje, estacionamento ou solo',
      'Instalação planejada para não parar a operação',
      'Homologação junto à distribuidora',
      'Monitoramento da geração',
    ],
    faq: [
      { q: 'A empresa pode financiar o sistema?', a: 'Sim. Existem linhas de crédito específicas para energia solar em bancos e cooperativas. Ajudamos a reunir a documentação técnica que o banco pede.' },
      { q: 'A instalação atrapalha o funcionamento do negócio?', a: 'A maior parte do trabalho acontece no telhado. O desligamento para a conexão final é curto e combinado com antecedência.' },
      { q: 'Posso usar os créditos em outra unidade da empresa?', a: 'Sim. No autoconsumo remoto, os créditos gerados em um local podem abater o consumo de outras unidades do mesmo titular na mesma distribuidora.' },
    ],
    whatsapp: 'Olá! Quero um orçamento de energia solar para minha empresa.',
    icone: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  },
  {
    slug: 'rural',
    titulo: 'Solar Rural',
    resumo: 'Soluções robustas para fazendas, granjas e propriedades rurais. Energia limpa onde a rede elétrica é cara ou instável.',
    chamada: 'Energia para irrigação, bombeamento, refrigeração e a casa da propriedade.',
    explicacao: [
      'Na zona rural, a energia pesa no custo de bombas, ordenha, refrigeração e beneficiamento. O sistema solar reduz esse custo e pode ser instalado em telhados de galpões ou em estruturas no solo.',
      'Onde a rede é instável, o sistema pode ser combinado com baterias para manter cargas importantes funcionando durante as quedas.',
    ],
    indicado: [
      'Fazendas, sítios, granjas e chácaras',
      'Propriedades com irrigação ou bombeamento de água',
      'Locais com quedas frequentes de energia',
    ],
    inclui: [
      'Visita técnica na propriedade',
      'Projeto em telhado ou estrutura de solo',
      'Opção de baterias para cargas essenciais',
      'Homologação junto à distribuidora',
      'Monitoramento da geração',
    ],
    faq: [
      { q: 'Existe financiamento para o produtor rural?', a: 'Sim. Há linhas de crédito rural voltadas a energia renovável em bancos e cooperativas. Fornecemos o projeto e o orçamento que o banco pede.' },
      { q: 'Dá para usar a energia de um galpão em outra parte da propriedade?', a: 'Se forem unidades consumidoras diferentes do mesmo titular, os créditos podem ser compartilhados pelo autoconsumo remoto. Avaliamos o caso na visita.' },
      { q: 'O sistema funciona sem rede elétrica?', a: 'O sistema conectado à rede desliga quando a rede cai, por segurança. Para funcionar sem rede, é preciso um sistema com baterias (híbrido ou isolado).' },
    ],
    whatsapp: 'Olá! Quero um orçamento de energia solar para minha propriedade rural.',
    icone: '<path d="M2 22 L22 2"/><path d="M6.5 6.5 A8 8 0 0 1 17.5 17.5"/><path d="M3 3 L9 9"/><path d="M15 15 L21 21"/>',
  },
  {
    slug: 'carregador-veiculo-eletrico',
    titulo: 'Carregador Veículo Elétrico',
    resumo: 'Integre sua estação de carregamento ao sistema solar e carregue seu veículo elétrico com energia limpa gerada no seu telhado.',
    chamada: 'Carregue o carro em casa, com energia do seu próprio telhado.',
    explicacao: [
      'Instalamos o carregador de parede (wallbox) com circuito dedicado e proteções, dimensionado para o seu veículo e para o padrão de entrada do imóvel.',
      'Se você tem ou vai instalar energia solar, ajustamos o tamanho do sistema para cobrir também o consumo do carro.',
    ],
    indicado: [
      'Quem tem ou vai comprar carro elétrico ou híbrido plug-in',
      'Condomínios e empresas que querem oferecer recarga',
      'Quem já tem energia solar e vai aumentar o consumo',
    ],
    inclui: [
      'Avaliação do padrão de entrada e da carga disponível',
      'Indicação do carregador adequado ao veículo',
      'Instalação com circuito e proteções dedicadas',
      'Redimensionamento do sistema solar, se necessário',
    ],
    faq: [
      { q: 'Posso carregar na tomada comum?', a: 'É possível em alguns veículos, mas é lento e exige uma tomada e um circuito em boas condições. O carregador de parede é mais rápido e mais seguro.' },
      { q: 'O carregamento usa a energia solar diretamente?', a: 'De dia, o carro pode usar a energia gerada na hora. À noite, ele consome da rede e os créditos acumulados durante o dia abatem esse consumo.' },
      { q: 'Preciso trocar o padrão de entrada?', a: 'Depende da potência do carregador e do padrão atual. Avaliamos isso antes da instalação e, se for preciso, incluímos o aumento de carga na proposta.' },
    ],
    whatsapp: 'Olá! Quero instalar um carregador de veículo elétrico.',
    icone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6"/><path d="M9 11h6"/><path d="M9 15h4"/><path d="M12 18v3"/>',
  },
  {
    slug: 'bateria',
    titulo: 'Sistema de Bateria',
    resumo: 'Armazene energia e ganhe autonomia. Mesmo durante quedas da rede, as cargas essenciais da sua casa ou empresa continuam funcionando.',
    chamada: 'Energia guardada para quando a rede cair.',
    explicacao: [
      'O sistema com baterias armazena energia para uso posterior. Quando a rede cai, ele alimenta automaticamente os circuitos que você escolher, como geladeira, iluminação, internet e equipamentos de trabalho.',
      'As baterias podem ser instaladas junto com um sistema solar novo ou somadas a um sistema existente, dependendo do inversor.',
    ],
    indicado: [
      'Locais com quedas frequentes de energia',
      'Home office, clínicas e comércios que não podem parar',
      'Propriedades rurais com rede instável',
    ],
    inclui: [
      'Levantamento das cargas essenciais e do tempo de autonomia desejado',
      'Dimensionamento do banco de baterias e do inversor',
      'Instalação e configuração do sistema',
    ],
    faq: [
      { q: 'Quanto tempo a bateria segura a casa?', a: 'Depende da capacidade do banco de baterias e de quais aparelhos ficam ligados. Por isso dimensionamos a partir das cargas essenciais e das horas de autonomia que você precisa.' },
      { q: 'Dá para colocar bateria no sistema que já tenho?', a: 'Em muitos casos, sim, com um inversor híbrido ou um equipamento complementar. Avaliamos o inversor atual para indicar a melhor solução.' },
      { q: 'A bateria precisa de manutenção?', a: 'As baterias de lítio usadas hoje praticamente não exigem manutenção. Recomendamos apenas acompanhar o funcionamento pelo aplicativo e manter o local ventilado.' },
    ],
    whatsapp: 'Olá! Quero saber sobre sistema de baterias.',
    icone: '<rect x="6" y="7" width="12" height="10" rx="2"/><path d="M9 7V4"/><path d="M15 7V4"/><path d="M2 12h4M18 12h4"/>',
  },
  {
    slug: 'assinatura-solar',
    titulo: 'Assinatura Solar',
    resumo: 'Energia solar sem investimento inicial. Você recebe créditos de energia de uma usina e paga menos do que pagaria à distribuidora.',
    chamada: 'Economize na conta de luz sem instalar nada e sem investimento inicial.',
    explicacao: [
      'Na assinatura solar (geração compartilhada), você recebe créditos de energia gerados em uma usina solar. Esses créditos abatem a sua conta da distribuidora, e você paga a assinatura com desconto em relação à tarifa.',
      'É uma boa opção para quem mora de aluguel, em apartamento ou não quer investir na compra do sistema agora.',
    ],
    indicado: [
      'Quem mora de aluguel ou em apartamento',
      'Quem não tem telhado adequado',
      'Quem quer economizar sem fazer investimento',
    ],
    inclui: [
      'Análise da conta de luz',
      'Adesão sem obra e sem instalação',
      'Acompanhamento dos créditos na conta',
    ],
    faq: [
      { q: 'Preciso instalar alguma coisa?', a: 'Não. A energia é gerada em uma usina e chega como crédito na sua conta da distribuidora.' },
      { q: 'Quanto vou economizar?', a: 'O desconto depende do contrato e do seu consumo. Fazemos a simulação com a sua conta antes da adesão.' },
      { q: 'Tem fidelidade?', a: 'As condições de permanência variam conforme o contrato. Explicamos tudo, incluindo prazos de saída, antes de você assinar.' },
    ],
    whatsapp: 'Olá! Quero saber sobre a assinatura solar.',
    icone: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  },
  {
    slug: 'mercado-livre',
    titulo: 'Mercado Livre de Energia',
    resumo: 'Para médias e grandes empresas: migre para o Mercado Livre de Energia e negocie sua energia diretamente, com economia que pode chegar a 20% a 35%.',
    chamada: 'Escolha de quem comprar energia e negocie preço e prazo.',
    explicacao: [
      'No Mercado Livre de Energia, a empresa deixa de comprar energia obrigatoriamente da distribuidora e passa a contratar de geradoras ou comercializadoras, negociando preço, prazo e fonte.',
      'Analisamos as faturas, verificamos se a empresa pode migrar e acompanhamos o processo de adesão.',
    ],
    indicado: [
      'Empresas atendidas em média ou alta tensão (Grupo A)',
      'Indústrias, hospitais, shoppings, supermercados e redes de lojas',
      'Empresas que querem previsibilidade de custo de energia',
    ],
    inclui: [
      'Análise de elegibilidade e de economia',
      'Apoio na escolha do fornecedor e do contrato',
      'Acompanhamento da migração',
    ],
    faq: [
      { q: 'Minha empresa pode migrar?', a: 'Hoje podem migrar os consumidores atendidos em média e alta tensão (Grupo A). Verificamos isso pela sua fatura.' },
      { q: 'Quanto tempo leva a migração?', a: 'O processo envolve aviso à distribuidora e adequações de medição. Informamos o prazo do seu caso na análise.' },
      { q: 'Continuo recebendo conta da distribuidora?', a: 'Sim. A distribuidora continua cobrando o uso da rede (fio), e a energia passa a ser faturada pelo fornecedor contratado.' },
    ],
    whatsapp: 'Olá! Quero saber se minha empresa pode migrar para o Mercado Livre de Energia.',
    icone: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  },
];
