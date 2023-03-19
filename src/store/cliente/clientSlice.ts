import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

interface DadosPessoais {
  nome: string;
  sobrenome: string;
  dataNascimento: string;
  cpf: string;
  genero: string;
  senha: string;

  tipoTelefone: string;
  dddTelefone: number;
  numeroTelefone: number;
}

export const clienteSlice = createSlice({
  name: "cliente",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setDadosCliente: (state, action: PayloadAction<DadosPessoais>) => {
      state.nome = action.payload.nome;
      state.sobrenome = action.payload.sobrenome;
      state.dataNascimento = action.payload.dataNascimento;
      state.cpf = action.payload.cpf;
      state.senha = action.payload.senha;
      state.genero = action.payload.genero;
      state.tipoTelefone = action.payload.tipoTelefone;
      state.dddTelefone = action.payload.dddTelefone;
      state.numeroTelefone = action.payload.numeroTelefone;
    },
  },
});
export const { setEmail, setDadosCliente } = clienteSlice.actions;
