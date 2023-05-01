export interface ClientState {
  id: number | null;
  nome: string | null;
  sobrenome: string | null;
  cpf: string | null;
  genero: string | null;
  dataNascimento: string | null;
  email: string | null;
  senha: string | null;
  tipoTelefone: string | null;
  dddTelefone: number | null;
  numeroTelefone: number | null;
  tipoImovel: string | null;
  tipoEndereco: string | null;
  tipoLogradouro: string | null;
  logradouro: string | null;
  numeroEndereco: string | null;
  bairro: string | null;
  cep: number | null;
  nomeCidade: string | null;
  nomeEstado: string | null;
}
export interface CadastroClienteInterface {
  nome: string;
  sobrenome: string;
  cpf: string;
  genero: string;
  dataNascimento: string;
  email: string;
  senha: string;
  tipoTelefone: string;
  dddTelefone: number;
  numeroTelefone: number;
  tipoImovel: string;
  tipoEndereco: string;
  tipoLogradouro: string;
  logradouro: string;
  numeroEndereco: string;
  bairro: string;
  cep: number;
  nomeCidade: string;
  nomeEstado: string;
}

export interface Client {
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

export interface ResponseOneClient {
  message: string;
  statusCode: number;
  data: Client;
}
export interface ResponseClienteList {
  message: string;
  statusCode: number;
  data: [Client];
}

export interface personalData {
  nome: string;
  sobrenome: string;
  cpf: string;
  genero: string;
  dataNascimento: string;
  email: string;
  senha: string;
}
