import { Module } from '@nestjs/common';
import { AdviceService } from './advice.service';
import {AdviceController} from "./advice.controller";
import {TypegooseModule} from "nestjs-typegoose";
import {ProductModel} from "../../models/product.model";
import {ConfigModule, ConfigService} from "@nestjs/config";

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
  ],
  providers: [AdviceService],
  controllers: [AdviceController]
})
export class AdviceModule {}
