import {
  colorType,
  stylesType,
  IInitialCategories,
  skillsType,
  iconsCategoryType,
  adviceNameTypes,
  cardContactInfoType,
  IGrayCard,
} from 'types/constantsTypes'
import { Icons } from '../images/icons'
import { authorsNameTypes } from 'components/popups/types'
import Skill from '../images/skills/index'
import Category from '../images/category/index'
import { specsNamesTypes } from 'pages/product/types'

export const COLORS: colorType[] = [
  { nameColor: 'gray', color: '#E4E4E4' },
  { nameColor: 'yellow', color: '#E9D777' },
  { nameColor: 'vinous', color: '#96314A' },
  { nameColor: 'brown', color: '#906F48' },
  { nameColor: 'green', color: '#58B988' },
  { nameColor: 'blue', color: '#2B7493' },
  { nameColor: 'black', color: '#1C2537' },
]

export const STYLES: stylesType[] = [
  { style: 'Классический' },
  { style: 'Прованс' },
  { style: 'Модерн' },
  { style: 'Лофт' },
  { style: 'Скандинавский' },
]

export const INITIAL_CATEGORIES: IInitialCategories[] = [
  { name: 'Кухни', link: 'kitchens', categoryId: 1 },
  { name: 'Гостиные', link: 'living-rooms', categoryId: 2 },
  { name: 'Спальни', link: 'bed-rooms', categoryId: 3 },
  { name: 'Прихожие', link: 'hallways', categoryId: 4 },
  { name: 'Шкафы-купе', link: 'wardrobes', categoryId: 5 },
  { name: 'Детские', link: 'childish', categoryId: 6 },
  { name: 'Диваны', link: 'sofas', categoryId: 7 },
  { name: 'Столы и стулья', link: 'tables-and-chairs', categoryId: 8 },
]

export const SPECS_NAME: specsNamesTypes[] = [
  { name: 'Стиль', specsNameId: 'style' },
  { name: 'Материал', specsNameId: 'material' },
  { name: 'Размер', specsNameId: 'size' },
]

export const ADVICE_NAME: adviceNameTypes[] = [
  { name: 'Все', advice: 'all' },
  { name: 'Хиты продаж', advice: 'top' },
  { name: 'Новинки', advice: 'new' },
  { name: 'Скидки', advice: 'discount' },
  { name: 'Экологичные материалы', advice: 'eco' },
]

export const AUTHORS_NAME: authorsNameTypes[] = [
  { name: 'Петерс Максим', link: 'https://github.com/kejjero' },
  { name: 'Рамзанов Иван', link: 'https://github.com/IvanVideo' },
  { name: 'Трубицин Илья', link: 'https://github.com/Lionen89' },
]

export const BACKEND_SKILLS: skillsType[] = [
  { name: 'Node.js', icon: Skill.nodejs },
  { name: 'TypeScript', icon: Skill.typescript },
  { name: 'Nest.js', icon: Skill.nestjs },
  { name: 'MongoDB', icon: Skill.mongodb },
  { name: 'Passport.js', icon: Skill.passport },
]

export const FRONTEND_SKILLS: skillsType[] = [
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
  { name: 'Chart.js', icon: Skill.chart },
  { name: 'WebPack', icon: Skill.webpack },
]

export const DEPLOY_SKILLS: skillsType[] = [
  { name: 'Ubuntu', icon: Skill.ubuntu },
  { name: 'Nginx', icon: Skill.nginx },
]

export const ICONS_CATEGORY: iconsCategoryType[] = [
  { name: 'Кухня', icon: Category.kitchen, category: 'kitchens' },
  { name: 'Гостиная', icon: Category.livingRooms, category: 'living-rooms' },
]

export const CARD_PREVIEW_INFO: IGrayCard[] = [
  {
    icon: Icons.warranty,
    title: 'Гарантия',
    text: 'Официальные поставки',
  },
  {
    icon: Icons.shops,
    title: 'Более 2000',
    text: 'Торговых точек',
  },
  {
    icon: Icons.payment,
    title: 'Оплата',
    text: 'Легкие способы',
  },
]

export const CARD_CONTACT_INFO: cardContactInfoType[] = [
  {
    title: 'Адрес',
    info: 'м. Марьина Роща, ул. Сущевский Вал, д. 46, Универмаг Марьинский 3-й этаж',
  },
  {
    title: 'График работы',
    info: 'Ежедневно с 10:00 до 21:00',
  },
  {
    title: 'Телефоны',
    info: '+7 (495) 740-28-71',
    href: 'tel:+74957402871',
  },
  {
    title: 'Почта',
    info: 'acro-furniture@yandex.ru',
    href: 'mailto:acro-furniture@yandex.ru',
  },
]
