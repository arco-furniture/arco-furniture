import { IAdviceParam } from '../redux/home/types'

export type colorType = {
  nameColor: nameColor
  color: string
  exist?: boolean
}

export type stylesType = {
  style: string
}

export type adviceNameTypes = {
  name: string
  advice: IAdviceParam
}

export type nameColor = 'gray' | 'yellow' | 'vinous' | 'brown' | 'green' | 'blue' | 'black'

export interface IInitialCategories {
  name: string | null
  link: linkCategoryType | null
  categoryId: number | null
}

export type skillsType = {
  name: string
  icon: JSX.Element
}

export type linkCategoryType =
  | 'kitchens'
  | 'living-rooms'
  | 'bed-rooms'
  | 'hallways'
  | 'wardrobes'
  | 'childish'
  | 'sofas'
  | 'tables-and-chairs'

export type iconsCategoryType = {
  name: string
  icon: JSX.Element
  category: linkCategoryType
}

export type cardPreviewInfoType = {
  className: string
  title: string
  text: string
}

export type cardContactInfoType = {
  title: string
  info: string
  href?: string
}
