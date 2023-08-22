
import {AuthLogin, UserResponse} from "./types";
import {apiSlice} from "../../root/baseApi";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, AuthLogin>({
      query: (user) => ({
        url: '/login',
        body: user,
        method: "POST",
      }),
    })
  })
})

