import { IItem } from '../../types/itemTypes'

export interface IHomeState {
  adviceData: IItem[]
  searchData: IItem[]
  topProduct: IItem[]
  adviceStatus: 'success' | 'error' | 'loading'
  topProductStatus: 'initial' | 'success' | 'error' | 'loading'
  searchStatus: 'initial' | 'success' | 'error' | 'loading'
}

export type IAdviceParam = 'all' | 'discount' | 'eco' | 'top' | 'new'
