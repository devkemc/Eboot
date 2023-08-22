import {apiSlice} from "../../root/baseApi";
import {ProductState} from "./types";
import {ResponseApi, ResponseList} from "../types/response-list";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder )=>({
    getProducts: builder.query<ResponseList<ProductState>, void>({
      query: () => "/produtos",
    }),
    getOneProduct: builder.query<ResponseApi<ProductState>, { id: number }>({
      query: ({id}) => ({
        url: "/produtos",
        method: "GET",
        params:{
          id
        }
      }),
    }),
  }),

})