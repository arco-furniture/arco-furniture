import { searchColorType } from 'pages/category/types'

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
