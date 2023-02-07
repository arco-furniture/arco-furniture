import { IItem } from '../../types/itemTypes'

export interface ISearchContent {
  searchData: IItem[]
  setSearchValue: (value: string) => void
}
