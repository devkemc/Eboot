import {apiSlice} from "../../root/baseApi";
import {ResponseApi} from "../types/response-list";
import {EnderecoState} from "./types/endereco";

export const enderecoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEnderecoPorCliente: builder.query<ResponseApi<[EnderecoState]>, { clienteId: number }>(
      {
        query: (cliente) => ({
          url: `/enderecos?clienteId=${cliente.clienteId}`,
          method: "GET"
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