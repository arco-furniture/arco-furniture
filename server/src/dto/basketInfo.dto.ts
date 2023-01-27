import {IsString} from "class-validator";

export class BasketInfoDto {
  @IsString()
  delivery: string

  @IsString()
  pay: string
}
