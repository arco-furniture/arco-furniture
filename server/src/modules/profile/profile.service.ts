import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {JwtService} from "@nestjs/jwt";
import { UserModel } from 'src/models/user.model';
import {RefreshTokenDto} from "../../dto/refreshToken.dto";

@Injectable()
export class ProfileService {
  constructor(@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>, private readonly jwtService: JwtService) {}

  async getProfile(token: RefreshTokenDto) {
    const user = await this.jwtService.verifyAsync(token.refreshToken)
    if (!user) throw new UnauthorizedException('Неверный токен')

    const findUser = await this.UserModel.findById(user._id)
    if (!findUser) throw new UnauthorizedException('Такого пользователя не существует')

    return {
      _id: findUser._id,
      email: findUser.email,
      firstName: findUser.firstName,
      image: findUser.avatar,
    }
  }
}
