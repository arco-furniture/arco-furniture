import { IItem, imageTypes } from '../../types/itemTypes'
import { colorType } from '../../types/constantsTypes'

export interface ICard {
  item: IItem
  isTop?: boolean
  favoriteData?: IItem[]
}

export interface ICardColors {
  colorPalette: colorType[]
  visible: boolean
  setVisible: (visible: boolean) => void
  selectedColor: string
  setSelectedColor: (color: string) => void
  isTop: boolean
}

export interface ISwiperCards {
  children: JSX.Element[]
}

export interface ISwiperImages {
  images: imageTypes[]
  isTop: boolean
}

export interface ICardBottom {
  selectedColor: string
  item: IItem
}

export interface ICarousel {
  children: JSX.Element[]
}
