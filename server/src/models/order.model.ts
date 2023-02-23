import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";
import {BasketItemDto} from "../dto/BasketItem.dto";

export interface OrderModel extends Base {}

export class OrderModel extends TimeStamps{
  @prop({ required: true })
  article: number

  @prop()
  firstName: string

  @prop()
  allPrice: number

  @prop()
  basketItems: BasketItemDto[]
}
