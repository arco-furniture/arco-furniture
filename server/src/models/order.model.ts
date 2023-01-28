import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";
import {UserModel} from "./user.model";
import {BasketItemDto} from "../dto/BasketItem.dto";

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps{
  @prop({ required: true })
  id: string

  @prop()
  user: {
    firstName: string
  }

  @prop()
  basketItems: BasketItemDto[]
}
