import { Module } from '@nestjs/common';
import {TypegooseModule} from "nestjs-typegoose";
import {ProductModel} from "../../models/product.model";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import {getJwtConfig} from "../../config/jwt.config";
import {ProfileService} from "./profile.service";
import {ProfileController} from "./profile.controller";
import {UserModel} from "../../models/user.model";

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
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig
    })
  ],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}
