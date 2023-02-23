import { specsNamesTypes } from '../../pages/product/types'
import { IBasketItem } from '../../pages/basket/types'

export interface IBasketPushItem {
  _id: string
  title: string
  price: number
  oldPrice: number
  image: string
  specs: specsNamesTypes[]
  color: string
  article: string
  category: number
}

export interface ICountBasket {
  status: boolean
  _id: string
}

export interface IBasketState {
  totalPrice: number
  totalOldPrice: number
  dataBasketItems: IBasketItem[]
  isLoadingBasket: boolean
}
