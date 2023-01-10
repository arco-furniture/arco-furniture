import {Body, Controller, HttpCode, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthDto} from "../../dto/auth.dto";
import {UserDto} from "../../dto/user.dto"
import {RefreshTokenDto} from "../../dto/refreshToken.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login (@Body() dto: AuthDto) {
    return this.AuthService.login(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('register')
  async register (@Body() dto: UserDto) {
    return this.AuthService.register(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login/access-token')
  async getNewTokens (@Body() refreshToken: RefreshTokenDto) {
    return this.AuthService.getNewTokens(refreshToken)
  }
}
