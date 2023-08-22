import {apiSlice} from "../../root/baseApi";
import {AdicionaItemCarrinho, CarrinhoState} from "./types";
import {ResponseApi} from "../types/response-list";

export const shoppingCartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShoppingCart: builder.query<ResponseApi<CarrinhoState>, { id: number }>({
      query: ({id}) => ({
        url: '/carrinho',
        method: "GET",
        params: {
          id
        }
      }),
    }),
    addProductInCar: builder.mutation<ResponseApi<CarrinhoState>, AdicionaItemCarrinho>({
      query: (item) => ({
        url: "item_carrinho",
        body: item,
        method: "POST"
      })
    }),
    deleteProductInCar: builder.mutation<ResponseApi<CarrinhoState>, {itemCarrinhoId: number}>({
      query: (id) =>({
        url:"/item_carrinho",
        body: id,
        method:"DELETE"
      })
    }),
    updateProductInCar: builder.mutation<ResponseApi<CarrinhoState>, {itemCarrinhoId:number, quantidadeProduto: number}>({
      query: (item)=>({
        url:"/item_carrinho",
        body:item,
        method:"PATCH"
      })
    })
  }),
})