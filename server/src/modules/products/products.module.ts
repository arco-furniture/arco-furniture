import { Module } from '@nestjs/common';
import {ProductsService} from "./products.service";
import {ProductsController} from "./products.controller";
import {TypegooseModule} from "nestjs-typegoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import {getJwtConfig} from "../../config/jwt.config";
import {ProductModel} from "../../models/product.model";

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
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
