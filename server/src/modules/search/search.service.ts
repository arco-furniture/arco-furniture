import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "../../schemas/product.schema";
import {Model} from "mongoose";

@Injectable()
export class SearchService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async findItemsForSearch(value) {
    const items = await this.productModel.find()
    return await items.filter((obj) => {
      const res = obj.title.toLowerCase().indexOf(value.toLowerCase())
      return res !== -1;
    })
  }
}
