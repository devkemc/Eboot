import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../root/store";
export interface AuthState {
  id: number | null
  admin: boolean | null
  token: string | null
}

const initialState: AuthState = {
  id: null,
  token: null,
  admin: null
}
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: number, token: string, admin: boolean }>) => {
      state.id = action.payload.id
      state.admin = action.payload.admin
      state.token = action.payload.token
    },
    removeUser:(state)=>{
      state.id = null
      state.token = null
      state.admin = null
    }
  }
})

export const selectAuth = (state: RootState) => state.auth

export const {setUser, removeUser} = authSlice.actions
