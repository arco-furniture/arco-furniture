export interface IBasketItem {
  _id: number
  title: string
  price: number
  oldPrice: number
  image: string
  specs: specsTypes[]
  color: string
  article: string
  count: number
  isControl: boolean
}

export type specsTypes = {
  value: string
  specsId: string
}
