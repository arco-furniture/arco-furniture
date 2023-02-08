import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import { UserModel } from 'src/models/user.model';
import {FirstNameDto} from "../../dto/firstName.dto";
import {AvatarResponse} from "./avatar.interface";
import { path } from 'app-root-path'
import {ensureDir, writeFile, unlink} from "fs-extra";
import {compare, genSalt, hash} from "bcryptjs";
import {ChangePasswordDto} from "../../dto/changePassword.dto";

@Injectable()
export class ProfileService {
  constructor(@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>) {
  }

  async getProfile(id: string) {
    const user = await this.checkUser(id)

    return this.returnUserFields(user)
  }

  async uploadAvatar(files: Express.Multer.File[], id) {
    const user = await this.checkUser(id)

    const uploadFile:AvatarResponse[] = await this.saveFile(files, user)

    if (!uploadFile) throw new UnauthorizedException('Не удалось загрузить аватар') // потом поменять код ошибки

    user.avatar = uploadFile[0].url
    await user.save()

    return this.returnUserFields(user)
  }

  private async saveFile(files: Express.Multer.File[], user) {
    const uploadFolder = `${path}/mediabank`
    await ensureDir(uploadFolder)
    const ACCESS_URL = process.env.ACCESS_URL

    const res:AvatarResponse[] = await Promise.all(
      files.map(async file => {
        await writeFile(`${uploadFolder}/${user._id}.jpg`, file.buffer)
        return {
          url: `${ACCESS_URL}/api/mediabank/${user._id}.jpg`,
          name: user._id,
        }
      })
    )
    return res
  }

  async deleteAvatar(id) {
    const user = await this.checkUser(id)

    const uploadFolder = `${path}/mediabank`
    await ensureDir(uploadFolder)
    await unlink(`${uploadFolder}/${user._id}.jpg`)

    user.avatar = null
    await user.save()

    return this.returnUserFields(user)
  }

  async changeFirstName(dto: FirstNameDto, id: string) {
    const user = await this.checkUser(id)

    user.firstName = dto.firstName
    await user.save()

    return this.returnUserFields(user)
  }

  async changePassword(dto: ChangePasswordDto, id) {
    const user = await this.checkUser(id)

    const isValidPassword = await compare(dto.password, user.password)
    if (!isValidPassword) throw new UnauthorizedException('Неверный текущий пароль')

    const salt = await genSalt(10)
    user.password = await hash(dto.newPassword, salt)
    await user.save()

    return this.returnUserFields(user)
  }

  private async checkUser(id) {
    const user = await this.UserModel.findById(id)
    if (!user) throw new UnauthorizedException('Такого пользователя не существует')
    return user
  }

  private returnUserFields(user) {
    return {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      avatar: user.avatar,
      money: user.money,
      steps: user.steps,
      basketItems: user.basketItems,
    }
  }
}