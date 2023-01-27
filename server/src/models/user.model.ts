import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";
import {BasketItemDto} from "../dto/BasketItem.dto";
import {BasketInfoDto} from "../dto/basketInfo.dto";

export interface UserModel extends Base {}

export class UserModel extends TimeStamps{

  @prop({ minlength: 2 })
  firstName: string

  @prop({ unique: true })
  email: string

  @prop({ minlength: 6 })
  password: string

  @prop()
  avatar: string | null

  @prop()
  money: number

  @prop()
  steps: {
    info: BasketInfoDto | null
    form: null
  }

  @prop()
  basketItems: BasketItemDto[] | null
}
