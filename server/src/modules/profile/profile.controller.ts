import {
  Body,
  Controller, Delete,
  Get, HttpCode,
  Patch,
  Post, UploadedFile, UseInterceptors,
} from '@nestjs/common';
import {ProfileService} from "./profile.service";
import {Auth} from "../../decorators/auth.decorator";
import {User} from "../../decorators/user.decorator";
import {FirstNameDto} from "../../dto/firstName.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {PasswordDto} from "../../dto/password.dto";

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @HttpCode(200)
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
    return this.profileService.uploadAvatar(Array(file), _id)
  }

  @HttpCode(200)
  @Delete('avatar/delete')
  @Auth()
  async deleteAvatar(@User('_id') _id: string) {
    return this.profileService.deleteAvatar(_id)
  }

  @HttpCode(200)
  @Patch('firstname/change')
  @Auth()
  async changeName(@Body() dto: FirstNameDto, @User('_id') _id: string) {
    return this.profileService.changeFirstName(dto, _id)
  }


  @HttpCode(200)
  @Patch('password/change')
  @Auth()
  async changePassword(@Body() dto: PasswordDto, @User('_id') _id: string) {
    return this.profileService.changePassword(dto, _id)
  }
}