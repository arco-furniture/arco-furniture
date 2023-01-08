import { Injectable } from '@nestjs/common';
import {ProductModel} from "../../models/product.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(ProductModel) private productModel: ModelType<ProductModel>) {}

  async getAll(): Promise<ProductModel[]> {
    return this.productModel.find().exec()
  }

  async getProductItem(id: string): Promise<ProductModel[]> {
    return this.productModel.findById(id)
  }

  async createProduct(productDto: ProductModel): Promise<ProductModel> {
    const newProduct = new this.productModel(productDto)
    return newProduct.save()
  }
}
