import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ClientState} from "./types";

 const initialState: ClientState = {
  id: null,
  nome: null,
  sobrenome: null,
  cpf: null,
  genero: null,
  dataNascimento: null,
  email: null,
  senha: null,
  tipoTelefone: null,
  dddTelefone: null,
  numeroTelefone: null,
  tipoImovel: null,
  tipoEndereco: null,
  tipoLogradouro: null,
  logradouro: null,
  numeroEndereco: null,
  bairro: null,
  cep: null,
  nomeCidade: null,
  nomeEstado: null,
};


export const clientSlice = createSlice({
  name: "cliente",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
  },
});
export const { setForm} = clientSlice.actions;
