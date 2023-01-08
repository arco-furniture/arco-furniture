import {IsEmail, IsString, MinLength} from "class-validator";

export class AuthDto {
  @IsEmail()
  email: string

  @MinLength(6, { message: 'Минимальная длина пароля 6 символов'})
  @IsString()
  password: string
}