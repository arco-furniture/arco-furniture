import { Injectable } from '@nestjs/common';
import {createProductDto} from "../../dto/createProduct.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "../../schemas/product.schema";
import {Model} from "mongoose";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async getProductItem(id: string): Promise<Product[]> {
    return this.productModel.findById(id)
  }

  async createProduct(productDto: createProductDto): Promise<Product> {
    const newProduct = new this.productModel(productDto)
    return newProduct.save()
  }
}
