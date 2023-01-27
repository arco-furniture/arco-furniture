import {IsNumber, IsString} from "class-validator";

export class BasketItemDto {
  @IsString()
  _id: string

  @IsString()
  color: string

  @IsNumber()
  count: number
}