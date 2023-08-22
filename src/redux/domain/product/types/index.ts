export interface ProductState {
  id: number
  nome: string
  descricao: string
  url_ft1: string
  url_ft2: string
  url_ft3: string
  preco: number
  categoria: string
  tamanhos:[Tamanhos]
}

export interface Tamanhos{
  tamanho:{
    tam_id:number
    tam_tamanho:number
  }
}