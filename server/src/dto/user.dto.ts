import {IsEmail, IsString, MinLength} from "class-validator";

export class UserDto {

  @IsString()
  firstName: string

  @IsEmail()
  email: string

  @MinLength(6, { message: 'Минимальная длина пароля 6 символов'})
  @IsString()
  password: string

  image: string | null
}