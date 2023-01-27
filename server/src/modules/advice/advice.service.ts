import { Injectable } from '@nestjs/common';
import {ModelType} from "@typegoose/typegoose/lib/types";
import {ProductModel} from "../../models/product.model";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class AdviceService {
  constructor(@InjectModel(ProductModel) private productModel: ModelType<ProductModel>) {}

  async getAll() {
    return this.productModel.find({"advice.status": true})
  }

  findCurrentAdvice(value) {
    if (value === 'all') {
      return this.productModel.find({"advice.status": true})
    } else {
      return this.productModel.find({"advice.value": `${value}`})
    }
  }

  async getTopProduct() {
    const cards = await this.productModel.find()
    let randomCard  = await this.getRandomElement(cards)
    randomCard.colors = await this.getRandomElement(randomCard.colors)
    return [randomCard]
  }


  private async getRandomElement(cards) {
    return cards[Math.floor(Math.random() * cards.length)]
  }
}
