import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthController} from "./auth.controller";
import {TypegooseModule} from "nestjs-typegoose";
import {UserModel} from "../../models/user.model";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import {getJwtConfig} from "../../config/jwt.config";
import {JwtStrategy} from "../../strategies/jwt.strategy";

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
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
