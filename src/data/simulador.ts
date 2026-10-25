// Parâmetros do simulador de economia. Os valores informados pelo Álvaro ficam em prova-social.ts (SIMULADOR).
import { SIMULADOR as REAL } from './prova-social';

export const SIMULADOR = {
  /** Tarifa média no Pará, em R$/kWh (com impostos). */
  tarifaKwh: REAL.tarifaKwh,
  /** Potência de cada placa, em W. */
  potenciaPlacaW: Math.round(REAL.potenciaPlacaKwp * 1000),
  /** Geração média de uma placa de 550 W no Pará, em kWh/mês. */
  geracaoPlacaKwhMes: REAL.kwhPorPlacaMes,
  /** Economia sobre a conta (o custo de disponibilidade continua sendo cobrado). Min = max mostra um valor único. */
  economiaMin: REAL.economiaPercentual,
  economiaMax: REAL.economiaPercentual,
  /** Investimento em R$ por kWp instalado (preço médio da SER). Min = max mostra um valor único. */
  investimentoKwpMin: REAL.precoPorKwp,
  investimentoKwpMax: REAL.precoPorKwp,
  /** Perda anual de geração das placas (0,5% ao ano). */
  degradacaoAnual: 0.005,
  /** Reajuste anual da tarifa considerado no gráfico (0 = conservador). */
  reajusteTarifaAnual: 0,
  /** Horizonte do gráfico, em anos. */
  anos: 25,
};

export const TIPOS_IMOVEL = [
  { value: 'residencia', label: 'Residência' },
  { value: 'comercio', label: 'Comércio' },
  { value: 'rural', label: 'Rural' },
] as const;

/** Endereço da função que grava o lead no SER Hub (rota pública /publico/site-lead do SER Hub). */
export const LEAD_ENDPOINT =
  import.meta.env.PUBLIC_LEAD_ENDPOINT ?? 'https://api.serenergiarenovavel.com.br/publico/site-lead';
