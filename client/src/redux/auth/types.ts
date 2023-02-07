import { IUser } from '../../types/userTypes'

export interface IAuth extends ITokensAuth {
  user: IUser | null
}

export interface ITokensAuth {
  accessToken: string
  refreshToken: string
}

export interface IPayment {
  user: IUser
  orderAmount: number
}

export interface IPostItems {
  _id: string
  color: string
  count: number
}

export interface IAuthState {
  eyeStatus: boolean
  isLoadingAuth: boolean
  popupRegister: boolean
  popupAuth: boolean
  statusRegister: boolean
  user: IUser | null
}

export interface IRegisterUser extends IAuthUser {
  firstName: string
}

export interface IAuthUser {
  email: string
  password: string
}
