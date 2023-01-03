import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "../../schemas/product.schema";
import {SearchController} from "./search.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema}
    ])
  ],
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule {}
