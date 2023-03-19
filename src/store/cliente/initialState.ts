import { CadastroClienteInterface } from "./interfaces/cliente";

export const initialState: CadastroClienteInterface = {
  nome: "",
  sobrenome: "",
  cpf: "",
  genero: "",
  dataNascimento: "",
  email: "",
  senha: "",
  ranking: 0,
  isActive: true,
  tipoTelefone: "",
  dddTelefone: 0,
  numeroTelefone: 0,
};
