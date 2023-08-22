import {apiSlice} from "../../root/baseApi";
import {ResponseApi} from "../types/response-list";
import {EnderecoState} from "./types/endereco";
import {CarrinhoState} from "../carrinho/types";

export const enderecoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEnderecoPorCliente: builder.query<ResponseApi<[EnderecoState]>, { clienteId: number }>(
      {
        query: ({clienteId}) => ({
          url: "/enderecos",
          method: "GET",
          params:{
            clienteId
          }
        })
      }),
    addEndereco: builder.mutation<ResponseApi<EnderecoState>, EnderecoState>({
      query:(endereco) =>({
        url: "/enderecos",
        method:"POST",
        body: endereco
      })
    })

  })
})