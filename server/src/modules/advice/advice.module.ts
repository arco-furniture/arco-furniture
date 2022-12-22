import { Module } from '@nestjs/common';
import { AdviceService } from './advice.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "../../schemas/product.schema";
import {AdviceController} from "./advice.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema}
    ])
  ],
  providers: [AdviceService],
  controllers: [AdviceController]
})
export class AdviceModule {}
