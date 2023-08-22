import {apiSlice} from "../../root/baseApi";
import {ResponseApi, ResponseList} from "../types/response-list";
import {CartaoState} from "./types";

export const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<ResponseList<CartaoState>, { clienteId: number }>({
      query: ({clienteId}) => ({
        url: '/cartoes',
        method: "GET",
        params: {
          clienteId
        }
      })
    }),
    addCard: builder.mutation<ResponseApi<CartaoState>,CartaoState> ({
      query: (cartao) => ({
        url: '/cartoes',
        method: "POST",
        body: cartao
      })
    })
  })
})