import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {ProductModel} from "../../models/product.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class SearchService {
  constructor(@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>) {}

  async findItemsForSearch(value) {
    const initialCategories = [
      { name: 'Кухн', link: 'kitchens' },
      { name: 'Гостин', link: 'living-rooms' },
      { name: 'Спальн', link: 'bed-rooms' },
      { name: 'Прихож', link: 'hallways' },
      { name: 'Шкаф', link: 'wardrobes' },
      { name: 'Детски', link: 'childish' },
      { name: 'Диван', link: 'sofas' },
      { name: 'Стол', link: 'tables-and-chairs' },
    ]


    let items = await this.productModel.find()
    items = [...items]

    const titles = await this.searchElements(items, 'title', value)
    // const categories = await this.searchCategory(items, initialCategories, value)


    if (!titles.length) throw new HttpException('Not found search items', HttpStatus.BAD_GATEWAY)

    return titles
  }


  private async searchElements(data, name, value) {
    return  await data.filter((obj) => {
      const filter = obj[name].toLowerCase().indexOf(value.toLowerCase())
      if (filter !== -1) return filter
      return false
    })
  }

  // private async searchCategory(data, initial, value) {
  //   return await data.filter((_) => {
  //     const res = initial.filter((item) => item.name.toLowerCase().indexOf(value.toLowerCase()))
  //     if (res !== -1) return res
  //     return false
  //   })
  // }

}
