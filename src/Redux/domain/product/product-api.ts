import {apiSlice} from "../../root/baseApi";
import {ProductState, ResponseProduct, ResponseProductList} from "./types";
import {ResponseOneClient} from "../cliente/types";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder )=>({
    getProducts: builder.query<ResponseProductList, void>({
      query: () => "/produtos",
    }),
    getOneProduct: builder.query<ResponseProduct, { id: number }>({
      query: (product) => ({
        url: `/produtos/${product.id}`,
        method: "GET",
      }),
    }),
  }),

})