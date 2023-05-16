
import {apiSlice} from "../../root/baseApi";
import {CadastroClienteInterface, personalData, ResponseClienteList, ResponseOneClient} from "./types/client";

export const clientApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query<ResponseClienteList, void>({
      query: () => "/clientes",
    }),
    getOneClient: builder.query<ResponseOneClient, { id: number }>({
      query: (cliente) => ({
        url: `/clientes?id=${cliente.id}`,
        method: "GET",
      }),
    }),
    addClient: builder.mutation<ResponseClienteList, CadastroClienteInterface>({
      query: (cliente) => ({
        url: "/clientes",
        body: cliente,
        method: "POST",
      }),
    }),
    inativeClient: builder.mutation<ResponseClienteList, { id: number }>({
      query: (id) => ({
        url: "/clientes",
        body: id,
        method: "DELETE",
      }),
    }),
    updateClient: builder.mutation<ResponseOneClient, personalData>({
      query: (cliente) => ({
        url: "/clientes",
        body: cliente,
        method: "PATCH",
      }),
    }),
  }),
});
