// Prova social da SER: material real enviado pelo Álvaro em 23/10/2026.
// Os Reels são de clientes e vão incorporados pelo embed oficial do Instagram (carregamento tardio).

export const REELS_CLIENTES = [
  'https://www.instagram.com/reel/DbqrAZWy4af/',
  'https://www.instagram.com/reel/DbNqHSDheH7/',
  'https://www.instagram.com/reel/DZ4k-yIBt8X/',
  'https://www.instagram.com/reel/DZhljcFh7Tn/',
  'https://www.instagram.com/reel/DZAJPrShkY7/',
  'https://www.instagram.com/reel/DWJXC2bjjtX/',
];

// Fotos de telhado retiradas por enquanto (poucas e sem informações); o vídeo de drone fica.
export const INSTALACOES: { foto: string; legenda: string; bairro: string; kwp: number | null }[] = [];

export const VIDEO_DRONE = { src: '/prova-social/instalacao-drone.mp4', poster: '/prova-social/instalacao-drone-poster.jpg' };

export const EMPRESA = {
  razaoSocial: 'Solucoes em Energia Renovavel Matriz LTDA',
  cnpj: '58.656.750/0001-04',
};

// Simulador: preço médio por kWp instalado informado pelo Álvaro.
export const SIMULADOR = {
  precoPorKwp: 2868.17,
  tarifaKwh: 1.27,
  kwhPorPlacaMes: 60,
  potenciaPlacaKwp: 0.55,
  economiaPercentual: 0.85,
};

// Avaliações copiadas do Google (texto exato, nome como aparece no Google). Vazio = bloco não aparece.
export const AVALIACOES: { nome: string; nota: number; texto: string; data?: string }[] = [
  // Avaliações reais do perfil da SER no Google (as seis mais recentes e melhores, conferidas em 24/10/2026; todas 5 estrelas).
  { nome: 'Carlos Eugênio', nota: 5, texto: 'Foi uma parceria muito boa onde encontrei uma empresa muito profissional e que cumpre o que promete estou muito satisfeito', data: 'outubro de 2026' },
  { nome: 'Gisele Costa', nota: 5, texto: 'Estou completamente satisfeita com o meu projeto. Fui muito bem atendida pelo Kurt Lemos, que foi super atencioso e conseguiu me orientar perante todas as minhas dúvidas( que não foram poucas rsrs), durante toda a negociação e no pós venda. Recomendo a SER ENERGIA RENOVÁVEL.', data: 'outubro de 2026' },
  { nome: 'Kurt P.', nota: 5, texto: 'Empresa de qualidade, nota máxima, atende diversos setores do mercado de energia e com uma equipe 100% qualificada, recomendo demais!!' },
  { nome: 'Michael S.', nota: 5, texto: 'Quero deixar meu agradecimento à SER Energia pelo excelente serviço! Estou muito satisfeito com os resultados e, principalmente, com a economia de mais de 60% na minha conta de energia elétrica. ⚡💰' },
  { nome: 'Vania M.', nota: 5, texto: 'Atendimento imediato, informações completas sobre o produto adquirido, ótimo atendimento antes, durante e depois da instalação. Um sonho realizado.' },
  { nome: 'Alessandra Q.', nota: 5, texto: 'A experiência tá sendo maravilhosa, é um sonho realizado. Agora é só aproveitar os benefícios dessa aquisição, que são inúmeros.' },
];

/** Link do perfil da SER no Google (para "ver todas as avaliações"). */
export const GOOGLE_PERFIL_URL = 'https://maps.google.com/?cid=16616116030980453344';
/** Link para o cliente deixar avaliação no Google (enviado pelo Álvaro em 23/10/2026). */
export const GOOGLE_AVALIAR_URL = 'https://g.page/r/CeBzQ4V-TZjmEAE/review';

/** Marcas de equipamentos e garantias. Vazio = bloco não aparece. */
export const MARCAS: { marca: string; item: string; garantia: string }[] = [
  // TODO(Álvaro): ex.: { marca: '...', item: 'Módulos', garantia: '12 anos produto / 25 anos performance' },
];

/** Código da ficha da SER no Google (Place ID). */
export const GOOGLE_PLACE_ID = 'ChIJ5zrvQuKNpJIR4HNDhX5NmOY';
/**
 * Chave do Google Maps (restrita a este site; pode ficar no código). Com ela o site mostra as avaliações AO VIVO (Places UI Kit)
 * e o mapa; sem ela, aparecem as avaliações copiadas abaixo e o link do mapa. Preencha para ligar.
 */
export const GOOGLE_MAPS_KEY = 'AIzaSyBaHx3QqY8lUVDbPlb3cZH71wdgLqnPPh4';  // chave própria da SER, restrita aos endereços da SER; pode ficar no código
export const ENDERECO = 'Av. Rômulo Maiorana, 300 – São Brás, Belém – PA';
