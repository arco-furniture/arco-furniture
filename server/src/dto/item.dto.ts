import {IsArray, IsBoolean, IsNumber, IsString} from "class-validator";

export class ItemDto {
  @IsString()
  _id: string

  @IsNumber()
  category: number

  @IsNumber()
  rating: number

  @IsString()
  article: string

  @IsString()
  title: string

  @IsNumber()
  advice: number

  @IsArray()
  specs: []

  @IsNumber()
  price: number

  @IsNumber()
  oldPrice: number

  @IsString()
  mark?: string

  @IsString()
  description: string

  @IsArray()
  colors: []

  @IsArray()
  productImages: []

  @IsArray()
  cardImages: []

  @IsNumber()
  count?: number

  @IsBoolean()
  isTop?: boolean

  @IsBoolean()
  exist?: boolean
}