import { CadastroClienteInterface } from "./interfaces/cliente";

export const initialState: CadastroClienteInterface = {
  id: 0,
  nome: "",
  sobrenome: "",
  cpf: "",
  genero: "",
  dataNascimento: "",
  email: "",
  senha: "",
  tipoTelefone: "",
  dddTelefone: 0,
  numeroTelefone: 0,
  tipoImovel: "",
  tipoEndereco: "",
  tipoLogradouro: "",
  logradouro: "",
  numeroEndereco: "",
  bairro: "",
  cep: 0,
  nomeCidade: "",
  nomeEstado: "",
};
