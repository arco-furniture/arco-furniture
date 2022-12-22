import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "../../schemas/product.schema";
import {CategoryController} from "./category.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema}
    ])
  ],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
