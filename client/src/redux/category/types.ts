export interface ICategoryState {
  price: [number, number]
  searchPrice: [number, number]
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
  minMaxPrice: [number, number]
  colors: string[]
  styles: string[]
  material: string
  tags: string[]
}
