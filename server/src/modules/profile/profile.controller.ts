import {
  Body,
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {ProfileService} from "./profile.service";
import {RefreshTokenDto} from "../../dto/refreshToken.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('info')
  async getProfile(@Body() refreshToken: RefreshTokenDto) {
    return this.profileService.getProfile(refreshToken)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('avatar/upload')
  @UseInterceptors(FileInterceptor('file'))
  async postAvatar(@UploadedFile() file: Express.Multer.File, @Body() token) {
    return file
  }
}