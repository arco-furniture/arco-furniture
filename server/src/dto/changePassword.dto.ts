import {IsString, MinLength} from "class-validator";

export class ChangePasswordDto {
  @MinLength(6, { message: 'Минимальная длина пароля 6 символов'})
  @IsString()
  password: string

  @MinLength(6, { message: 'Минимальная длина пароля 6 символов'})
  @IsString()
  newPassword: string
}