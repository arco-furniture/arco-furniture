import { IItem } from './itemTypes'

export interface IUser {
  _id: string
  avatar: string | null
  basketItems: IItem[] | null
  email: string
  firstName: string
  money: number
  steps: IStemsBasket
}

export interface IStemsBasket {
  info: infoType | null
  form: formType | null
}

export type infoType = {
  delivery: 'Курьером' | 'Почтой'
  pay: 'Оплата картой' | 'Наличные'
}

export type formType = {
  firstName: string
  address: string
  city: string
  phone: string
  reqDate: string
  comment: string
}
