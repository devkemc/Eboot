export interface ResponseList<T> {
  statusCode: number
  message: string
  data: [T]
}

export interface ResponseApi<T> {
  statusCode: number
  message: string
  data: T
}