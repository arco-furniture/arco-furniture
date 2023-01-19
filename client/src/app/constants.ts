import { searchColorType } from 'pages/category/types'
import { IInitialCategories } from 'components/header/types'
import { authorsNameTypes } from 'components/popups/types'
import Skill from '../images/skills/index'
import Category from '../images/category/index'

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

export const authorsName: authorsNameTypes[] = [
  { name: 'Петерс Максим', link: 'https://github.com/kejjero' },
  { name: 'Рамзанов Иван', link: 'https://github.com/IvanVideo' },
  { name: 'Трубицин Илья', link: 'https://github.com/Lionen89' },
]

export const backendSkills = [
  { name: 'Node.js', icon: Skill.nodejs },
  { name: 'TypeScript', icon: Skill.typescript },
  { name: 'Nest.js', icon: Skill.nestjs },
  { name: 'MongoDB', icon: Skill.mongodb },
]

export const frontendSkills = [
  { name: 'TypeScript', icon: Skill.typescript },
  { name: 'React', icon: Skill.react },
  { name: 'Redux Toolkit', icon: Skill.redux },
  { name: 'React Query', icon: Skill.reactQuery },
  { name: 'Jest & Enzyme', icon: Skill.jest },
  { name: 'Material UI', icon: Skill.materialUI },
  { name: 'Axios', icon: Skill.axios },
  { name: 'SCSS', icon: Skill.scss },
  { name: 'React Router', icon: Skill.reactRouter },
  { name: 'React Hook Form', icon: Skill.reactHookForm },
]

export const iconsCategory = [
  { name: 'Кухня', icon: Category.kitchen, category: 'kitchens' },
  { name: 'Гостиная', icon: Category.livingRooms, category: 'living-rooms' },
]
