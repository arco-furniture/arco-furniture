import { searchColorType } from 'pages/category/types'
import { IInitialCategories } from 'components/base/header/types'

export const MAIN_API = process.env.REACT_APP_API

export const colors: searchColorType[] = [
  { nameColor: 'gray', color: '#E4E4E4' },
  { nameColor: 'yellow', color: '#E9D777' },
  { nameColor: 'vinous', color: '#96314A' },
  { nameColor: 'brown', color: '#906F48' },
  { nameColor: 'green', color: '#58B988' },
  { nameColor: 'blue', color: '#2B7493' },
  { nameColor: 'black', color: '#1C2537' },
]

export const styles = [
  { style: 'Классический' },
  { style: 'Прованс' },
  { style: 'Модерн' },
  { style: 'Лофт' },
  { style: 'Скандинавский' },
]

export const initialCategories: IInitialCategories[] = [
  { name: 'Кухни', link: 'kitchens', categoryId: 1 },
  { name: 'Гостиные', link: 'living-rooms', categoryId: 2 },
  { name: 'Спальни', link: 'bed-rooms', categoryId: 3 },
  { name: 'Прихожие', link: 'hallways', categoryId: 4 },
  { name: 'Шкафы-купе', link: 'wardrobes', categoryId: 5 },
  { name: 'Детские', link: 'childish', categoryId: 6 },
  { name: 'Диваны', link: 'sofas', categoryId: 7 },
  { name: 'Столы и стулья', link: 'tables-and-chairs', categoryId: 8 },
]
