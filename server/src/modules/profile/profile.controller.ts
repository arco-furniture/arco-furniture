import {
  Body,
  Controller,
  Get, HttpCode,
  Patch,
  Post, UploadedFile, UseInterceptors,
} from '@nestjs/common';
import {ProfileService} from "./profile.service";
import {Auth} from "../../decorators/auth.decorator";
import {User} from "../../decorators/user.decorator";
import {FirstNameDto} from "../../dto/firstName.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('info')
  @Auth()
  async getProfile(@User('_id') _id: string) {
    return this.profileService.getProfile(_id)
  }

  @HttpCode(200)
  @Post('avatar/upload')
  @UseInterceptors(FileInterceptor('file'))
  @Auth()
  async uploadAvatar(@UploadedFile() file: Express.Multer.File, @User('_id') _id: string) {
    return this.profileService.uploadAvatar([file], _id)
  }

  @Patch('firstname/change')
  @Auth()
  async changeName(@Body() data: FirstNameDto, @User('_id') _id: string) {
    return this.profileService.changeFirstName(data, _id)
  }
}