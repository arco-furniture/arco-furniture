import { specsNamesTypes } from '../product/types'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IActiveStep {
  activeStep: number
}

export type TypesUseForm = {
  firstName: string
  city: string
  phone: string
  address: string
  comment: string
  reqDate: object
}

export type requestDataTypes = {
  delivery: 'Курьером' | 'Почтой'
  pay: 'Оплата картой' | 'Наличные'
}

export interface IControlForm extends requestDataTypes {
  query: boolean
}

export interface IBasketItem {
  article: string
  category: number
  color: string
  count: number
  image: string
  oldPrice: number
  price: number
  specs: specsNamesTypes[]
  title: string
  _id: string
  isControl?: boolean
}

export interface IBasketItemExtends {
  item: IBasketItem
  isControl?: boolean
}

export interface IBasketSpecifications {
  specsId: number
  value: string
}

export interface IDatePickerOrder {
  control: Control<TypesUseForm, TypesUseForm>
  errors: FieldErrors<TypesUseForm>
}

export interface IFormOrder {
  register: UseFormRegister<TypesUseForm>
  errors: FieldErrors<TypesUseForm>
}

export interface IMenuOrder extends IDatePickerOrder {
  isValid: boolean
}
