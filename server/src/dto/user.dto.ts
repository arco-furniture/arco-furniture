import {IsEmail, IsString, MinLength} from "class-validator";
import {prop} from "@typegoose/typegoose";
import {BasketInfoDto} from "./basketInfo.dto";
import {BasketItemDto} from "./BasketItem.dto";

export class UserDto {

  @IsString()
  firstName: string

  @IsEmail()
  email: string

  @MinLength(6, { message: 'Минимальная длина пароля 6 символов'})
  @IsString()
  password: string

  avatar: string | null

  money: number

  steps: {
    info: BasketInfoDto | null
    form: null
  }

  basketItems: null | BasketItemDto[]
}