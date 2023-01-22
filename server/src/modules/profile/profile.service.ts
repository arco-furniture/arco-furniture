import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import { UserModel } from 'src/models/user.model';
import {FirstNameDto} from "../../dto/firstName.dto";
import {AvatarResponse} from "./avatar.interface";
import { path } from 'app-root-path'
import {ensureDir, writeFile} from "fs-extra";

@Injectable()
export class ProfileService {
  constructor(@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>) {
  }

  async getProfile(id: string) {
    const user = await this.UserModel.findById(id)

    if (!user) throw new UnauthorizedException('Такого пользователя не существует')

    return {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      avatar: user.avatar,
    }
  }

  async uploadAvatar(files: Express.Multer.File[], id) {
    const user = await this.UserModel.findById(id)

    if (!user) throw new UnauthorizedException('Такого пользователя не существует')

    const uploadFile:AvatarResponse[] = await this.saveFile(files, user)

    if (!uploadFile) throw new UnauthorizedException('Не удалось загрузить аватар') // потом поменять код ошибки

    user.avatar = `${process.env.URL}:${process.env.PORT}${uploadFile[0].url}`
    await user.save()

    return {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      avatar: user.avatar,
    }
  }

  private async saveFile(files: Express.Multer.File[], user) {
    const uploadFolder = `${path}/images`
    await ensureDir(uploadFolder)

    const res:AvatarResponse[] = await Promise.all(
      files.map(async file => {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];

        await writeFile(`${uploadFolder}/${user._id}.${extension}`, file.buffer)
        return {
          url: `/images/${user._id}.${extension}`,
          name: user._id,
        }
      })
    )
    return res
  }

  async changeFirstName(data: FirstNameDto, id: string) {
    const user = await this.UserModel.findById(id)

    if (!user) throw new UnauthorizedException('Такого пользователя не существует')

    user.firstName = data.firstName
    await user.save()

    return {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      avatar: user.avatar,
    }
  }
}