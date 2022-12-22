import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "../../schemas/product.schema";
import {Model} from "mongoose";

@Injectable()
export class AdviceService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  getAll() {
    return this.productModel.find({"advice.status": true})
  }

  findCurrentAdvice(value) {
    if (value === 'all') {
      return this.productModel.find({"advice.status": true})
    } else {
      return this.productModel.find({"advice.value": `${value}`})
    }
  }
}
