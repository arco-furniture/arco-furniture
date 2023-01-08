import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserModel} from "../../models/user.model";
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {JwtService} from "@nestjs/jwt";
import {compare, genSalt, hash} from "bcryptjs"
import {UserDto} from "../../dto/user.dto"
import {AuthDto} from "../../dto/auth.dto"
import {RefreshTokenDto} from "../../dto/refreshToken.dto";

@Injectable()
export class AuthService {
  constructor(@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>, private readonly jwtService: JwtService) {}

  async login(dto: AuthDto) {
    const user = await this.validateUser(dto)
    const tokens = await this.issueTokenPair(String(user._id))

    return {
      user: this.returnUserFields(user),
      ...tokens,
    }
  }

  async register(dto: UserDto) {
    const oldUser = await this.UserModel.findOne({ email: dto.email })
    if (oldUser) throw new BadRequestException('Пользователь уже существует')

    const salt = await genSalt(10)

    const newUser = new this.UserModel(
      {
        firstName: dto.firstName,
        email: dto.email,
        password: await hash(dto.password, salt)
      })

    const user = await newUser.save()

    const tokens = await this.issueTokenPair(String(user._id))

    return {
      user: this.returnUserFields(user),
      ...tokens,
    }
  }

  async validateUser(dto: AuthDto) {
    const user = await this.UserModel.findOne({ email: dto.email })
    if (!user) throw new UnauthorizedException('Пользователь не найден')

    const isValidPassword = await compare(dto.password, user.password)
    if (!isValidPassword) throw new UnauthorizedException('Неверный пароль')

    return user
  }

  async issueTokenPair(_id: string) {
    const data = {_id}

    const refreshToken = await this.jwtService.signAsync(data, {
      expiresIn: '10d'
    })

    const accessToken = await this.jwtService.signAsync(data, {
      expiresIn: '2h'
    })


    return {refreshToken, accessToken}
  }

  returnUserFields(user) {
    return {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
    }
  }

  async getNewTokens(refreshToken: string) {
    if (!refreshToken) throw new UnauthorizedException('Пожалуйста, авторизуйтесь')

    const result = await this.jwtService.verifyAsync(refreshToken)
    if (!result) throw new UnauthorizedException('Неверный token')

    const user = await this.UserModel.findById(result._id)

    const newTokens = await this.issueTokenPair(String(user._id))

    return {
      user: this.returnUserFields(user),
      ...newTokens,
    }

  }
}
