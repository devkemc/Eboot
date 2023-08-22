import {createSlice} from "@reduxjs/toolkit";
import {CartaoState} from "./types";
import {RootState} from "../../root/store";

const initialState: CartaoState ={
  clienteId: null,
  numeroCartao: null,
  bandeiraCartao: null,
  codSeguranca: null,
  nomeImpresso: null,
  validade: null,
}
export const cardSlice = createSlice({
  name:'card',
  initialState,
  reducers:{}
})

export const selectCard = (state:RootState) => state.card