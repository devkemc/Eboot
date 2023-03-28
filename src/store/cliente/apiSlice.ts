import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CadastroClienteInterface, ResponseClienteList, ResponseOneClient, personalData } from "./interfaces/cliente";

export const clienteApi = createApi({
  reducerPath: "clientesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["clientes"],
  endpoints: (builder) => ({
    getClients: builder.query<ResponseClienteList, void>({
      query: () => "/clientes",
      providesTags: ["clientes"],
    }),
    getOneClient: builder.query<ResponseOneClient, { id: number }>({
      query: (cliente) => ({
        url: `/clientes/${cliente.id}`,
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
