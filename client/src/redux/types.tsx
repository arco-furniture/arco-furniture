import { IBasketItem } from '../types/basketTypes'
import { IItem } from '../types/itemTypes'

export interface IBasketState {
  totalPrice: number
  totalOldPrice: number
  dataBasketItems: IBasketItem[]
}

export interface IHomeState {
  adviceData: IItem[]
  searchData: IItem[]
  adviceStatus: 'success' | 'error' | 'loading'
  searchStatus: 'initial' | 'success' | 'error' | 'loading'
}

export interface IOtherState {
  statusAlert: boolean
  alert: {
    message: string
    type: string
  }
  itemIsLiked: boolean
  statusAuthorsPopup: boolean
  statusPaymentPopup: boolean
  paymentValue: null | number
}

export interface IProductState {
  currentColor: any
  productStatus: string
}

export type adviceFilterParam = 'all' | 'discount' | 'eco' | 'top' | 'new'
