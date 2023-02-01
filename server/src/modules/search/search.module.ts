import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import {SearchController} from "./search.controller";
import {TypegooseModule} from "nestjs-typegoose";
import {ProductModel} from "../../models/product.model";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule} from "@nestjs/jwt";
import {getJwtConfig} from "../../config/jwt.config";
import {BasketModule} from "../basket/basket.module";

@Module({
  imports: [
    BasketModule,
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
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule {}
