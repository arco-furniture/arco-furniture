export interface IProductState {
  currentColor: ICurrentColor | any
  productStatus: string
}

export interface ICurrentColor {
  index?: number
  exist?: boolean
  color: string
  nameColor: string
}
