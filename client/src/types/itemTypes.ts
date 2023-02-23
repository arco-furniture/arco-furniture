import { specsNamesTypes } from '../pages/product/types'
import { colorType } from './constantsTypes'

export interface IItem {
  _id: string
  category: number
  rating: number
  article: string
  title: string
  advice: number
  specs: specsNamesTypes[]
  price: number
  oldPrice: number
  mark?: string
  description: string
  colors: colorType[]
  productImages: imageTypes[]
  cardImages: imageTypes[]
  count?: number
  isTop?: boolean
  exist?: boolean
}

export type imageTypes = {
  image: string
}

export interface IProductParams {
  product: IItem
}
