import {Injectable} from '@nestjs/common';
import {ProductModel} from "../../models/product.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class SearchService {
  constructor(@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>) {}

  async findItemsForSearch(value) {
    const items = await this.productModel.find()
    return await items.filter((obj) => {
      const res = obj.title.toLowerCase().indexOf(value.toLowerCase())
      if(res !== -1) return res
      return []
    })
  }
}

// throw new UnauthorizedException