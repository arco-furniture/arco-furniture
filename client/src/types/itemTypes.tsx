import { specsTypes } from './basketTypes'

export interface IItem {
  id: number
  category: number
  rating: number
  article: string
  title: string
  advice: number
  specs: specsTypes[]
  price: number
  oldPrice: number
  mark?: string
  description: string
  colors: colorsTypes[]
  productImages: imagesTypes[]
  cardImages: imagesTypes[]
  count?: number
  isTop?: boolean
}

export type colorsTypes = {
  nameColor: string
  color: string
  exist: boolean
}

export type imagesTypes = {
  image: string
}
