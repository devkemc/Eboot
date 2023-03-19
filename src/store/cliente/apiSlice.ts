import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CadastroClienteInterface, ClienteGetAll, ClienteList } from "./interfaces/cliente";

export const clienteApi = createApi({
  reducerPath: "clientesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["clientes"],
  endpoints: (builder) => ({
    getClients: builder.query<ClienteGetAll, void>({
      query: () => "/clientes",
      providesTags: ["clientes"],
    }),
    addClient: builder.mutation<ClienteList, CadastroClienteInterface>({
      query: (cliente) => ({
        url: "/clientes",
        body: cliente,
        method: "POST",
      }),
    }),
  }),
});
