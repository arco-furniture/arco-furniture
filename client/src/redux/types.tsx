import { IBasketItem } from '../types/basketTypes'
import { IItem } from '../types/itemTypes'

export interface IBasketState {
  totalPrice: number
  totalOldPrice: number
  totalBenefit: number
  basketBtnStatus: boolean
  basketOrderBtnStatus: boolean
  dataBuyInfo: []
  dataBasketItems: IBasketItem[]
}

export interface IHomeState {
  adviceData: IItem[]
  searchData: IItem[]
  adviceStatus: 'success' | 'error' | 'loading'
  searchStatus: 'success' | 'error' | 'loading'
  favoriteData: any
}

export interface IOtherState {
  statusAlert: boolean
  alert: {
    message: string
    type: string
  }
  statusAuthorsPopup: boolean
}

export interface IProductState {
  productData: any
  productStatus: 'success' | 'error' | 'loading'
  currentColor: any
}

export type adviceFilterParam = 'all' | 'discount' | 'eco' | 'top' | 'new'
