import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CategoryController} from "./category.controller";
import {TypegooseModule} from "nestjs-typegoose";
import {ProductModel} from "../../models/product.model";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import {getJwtConfig} from "../../config/jwt.config";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: 'products',
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
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
