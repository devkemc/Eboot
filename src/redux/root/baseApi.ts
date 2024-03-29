import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "./store";


export const apiSlice= createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:"http://localhost:3000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints:() =>({})
})