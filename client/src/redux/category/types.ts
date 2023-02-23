export interface ICategoryState {
  minMaxPrice: [number, number]
  sort: string
  categoryParams: ICategoryParams
  allPages: number
  currentPage: number
  dataFilter: IDataFilter
}

export interface ICategoryParams {
  paramsId: null | number
  name: string
}

export interface IDataFilter {
  price: [number, number]
  colors: string[]
  styles: string[]
  material: string
  tags: string[]
}
