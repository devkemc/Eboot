import {ProductState} from "../../product/types";

export interface CarrinhoState{
  carrinhoId:number,
  valorTotalCarrinho: number,
  itensCarrinho: Array<ItensCarrinho>
}

export interface ItensCarrinho{
  icr_id:number,
  icr_quantidade:number,
  icr_valor_total:number,
  icr_tamanho:number,
  icr_prd_id:number,
  icr_car_id:number,
  tamanho: Tamanho
}
 export interface AdicionaItemCarrinho{
   clienteId: number
   produtoId: number
   tamanhoTenis: number
   quantidadeProduto: number
 }
interface Tamanho{
  tam_id: number,
  tam_tamanho: number
}