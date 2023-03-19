export interface CadastroClienteInterface {
  nome: string;
  sobrenome: string;
  cpf: string;
  genero: string;
  dataNascimento: string;
  email: string;
  senha: string;
  ranking: number;
  isActive: boolean;
  tipoTelefone: string;
  dddTelefone: number;
  numeroTelefone: number;
}

export interface ClienteList {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  genero: string;
  dataNascimento: string;
  email: string;
  ranking: number;
  isActive: boolean;
}

export interface ClienteGetAll {
  data: [ClienteList];
}
