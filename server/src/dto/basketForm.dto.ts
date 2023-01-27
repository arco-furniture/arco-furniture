import {IsObject, IsString} from "class-validator";

export class BasketFormDto {
  @IsString()
  address: string

  @IsString()
  city: string

  @IsString()
  comment: string | null

  @IsString()
  firstName: string

  @IsString()
  phone: string

  @IsObject()
  reqDate: undefined | {}
}