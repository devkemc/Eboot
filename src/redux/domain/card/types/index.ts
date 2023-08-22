
export interface CartaoState{
  clienteId: number | null,
  numeroCartao: number | null,
  nomeImpresso: string | null,
  codSeguranca: number | null,
  bandeiraCartao: string | null,
  validade: string | null
}