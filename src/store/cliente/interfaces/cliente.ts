export interface CadastroClienteInterface {
  id: number;
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
