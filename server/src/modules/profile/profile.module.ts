import { Module } from '@nestjs/common';
import {TypegooseModule} from "nestjs-typegoose";
import {ProfileService} from "./profile.service";
import {ProfileController} from "./profile.controller";
import {UserModel} from "../../models/user.model";
import {ServeStaticModule} from "@nestjs/serve-static"
import { path } from 'app-root-path'

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'user',
        }
      }
    ]),
    ServeStaticModule.forRoot({
      rootPath: `${path}/images`,
      serveRoot: '/images'
    })
  ],
  providers: [ProfileService],
  controllers: [ProfileController],
  exports: [ProfileService],
})
export class ProfileModule {}
