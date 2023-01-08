import {IsString} from "class-validator";

export class RefreshTokenDto {

  @IsString({
    message: 'Is not refresh token'
  })
  refreshToken: string
}