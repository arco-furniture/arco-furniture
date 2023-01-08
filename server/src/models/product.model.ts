import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps{
  @prop({ required: true })
  id: string

  @prop()
  title: string // "Кухня модульная DaVita"

  @prop()
  description: string

  @prop()
  price: number // 55000

  @prop()
  oldPrice: number | null

  @prop()
  category: string

  @prop()
  rating: number // 5.2

  @prop()
  article: string // 487001

  @prop({ type: Object})
  advice?: {
    status?: boolean
    value?: string
  }

  @prop()
  mark: string | null

  @prop({ type: Object })
  specs: {
    style: string // Классический / ЛДСП....
    material: string // Массив
    size: string // 1200х2400х450
  }

  @prop({ type: Array })
  colors: [
    {
      nameColor: string
      color: string,
      exist: boolean
    }
  ]

  @prop()
  productImages: string[]

  @prop()
  cardImages: string[]
}
