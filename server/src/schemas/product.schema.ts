import { Document } from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ProductDocument = Product & Document

@Schema()
export class Product {

  @Prop()
  title: string // "Кухня модульная DaVita"

  @Prop()
  description: string

  @Prop()
  price: number // 55000

  @Prop()
  oldPrice: number | null

  @Prop()
  category: string

  @Prop()
  rating: number // 5.2

  @Prop()
  article: string // 487001

  @Prop({ type: Object})
  advice?: {
    status?: boolean
    value?: string
  }

  @Prop()
  mark: string | null

  @Prop({ type: Object })
  specs: {
    style: string // Классический / ЛДСП....
    material: string // Массив
    size: string // 1200х2400х450
  }

  @Prop({ type: Array })
  colors: [
    {
      nameColor: string
      color: string,
      exist: boolean
    }
  ]

  @Prop()
  productImages: string[]

  @Prop()
  cardImages: string[]
}



export const ProductSchema = SchemaFactory.createForClass(Product)