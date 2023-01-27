import { Module } from '@nestjs/common';
import {TypegooseModule} from "nestjs-typegoose";
import {BasketController} from "./basket.controller";
import { BasketService } from './basket.service';
import {UserModel} from "../../models/user.model";
import {ProductModel} from "../../models/product.model";

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
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: 'products',
        }
      }
    ]),
  ],
  providers: [BasketService],
  controllers: [BasketController],
  exports: [BasketService],
})
export class BasketModule {}
