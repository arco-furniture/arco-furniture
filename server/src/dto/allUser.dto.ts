import {IsEmail, IsString, MinLength, IsNumber, IsArray} from "class-validator";
import {prop} from "@typegoose/typegoose";
import {BasketItemDto} from "./BasketItem.dto";
import {BasketInfoDto} from "./basketInfo.dto";

export class allUserDto {

  @IsString()
  firstName: string

  @IsEmail()
  email: string

  @MinLength(6, { message: 'Минимальная длина пароля 6 символов'})
  @IsString()
  password: string

  avatar: string | null

  @IsNumber()
  money: number

  @IsArray()
  steps: BasketInfoDto | null

  @IsArray()
  basketItems: null | BasketItemDto[]
}