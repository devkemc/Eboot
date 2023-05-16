import {ProductState} from "../../product/types";

export interface CarrinhoState{
  carrinhoId:number,
  valorTotalCarrinho: number,
  itensCarrinho: Array<ItensCarrinho>
}

export interface ItensCarrinho{
  icar_id:number,
  icar_quantidade:number,
  icar_valor_total:number,
  icar_tamanho:number,
  produto_id:number,
  carrinho_id:number,
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