export interface AuthLogin {
  email: string,
  senha: string
}

export interface UserResponse {
  id: number
  admin: boolean
  token: string
}