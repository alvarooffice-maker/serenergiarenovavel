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

// Fotos e vídeo de drone de instalações reais em Belém.
// TODO: o Álvaro informa o bairro e a potência (kWp) de cada uma.
export const INSTALACOES = [
  { foto: '/prova-social/instalacao-drone-01.jpg', legenda: 'Instalação residencial em Belém', bairro: '', kwp: null },
  { foto: '/prova-social/instalacao-drone-02.jpg', legenda: 'Sistemas instalados lado a lado no mesmo bairro', bairro: '', kwp: null },
];

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
  // TODO(Álvaro): copiar avaliações reais do perfil da SER no Google.
];

/** Link do perfil da SER no Google (para "ver todas as avaliações"). */
export const GOOGLE_PERFIL_URL = ''; // TODO(Álvaro)
/** Link para o cliente deixar avaliação no Google (enviado pelo Álvaro em 23/10/2026). */
export const GOOGLE_AVALIAR_URL = 'https://g.page/r/CeBzQ4V-TZjmEAE/review';

/** Marcas de equipamentos e garantias. Vazio = bloco não aparece. */
export const MARCAS: { marca: string; item: string; garantia: string }[] = [
  // TODO(Álvaro): ex.: { marca: '...', item: 'Módulos', garantia: '12 anos produto / 25 anos performance' },
];
