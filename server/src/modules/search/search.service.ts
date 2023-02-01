import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {ProductModel} from "../../models/product.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";
import {BasketService} from "../basket/basket.service";

@Injectable()
export class SearchService {
  constructor(@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>,
              private readonly BasketService: BasketService) {}

  async findItemsForSearch(value) {
    const items = await this.productModel.find()
    const filterItems = await this.searchElements([...items], value)
    const arrayId = await filterItems.map((item) => item._id)
    if (!arrayId.length) throw new HttpException('Not found search items', HttpStatus.BAD_GATEWAY)
    return await this.BasketService.getCards(arrayId)
  }

  private getPrefixItem(obj) {
    const initialCategories = [
      { name: 'кухня', category: 'kitchens' },
      { name: 'гостиная', category: 'living-rooms' },
      { name: 'спальня', category: 'bed-rooms' },
      { name: 'прихожая', category: 'hallways' },
      { name: 'шкаф', category: 'wardrobes' },
      { name: 'детская', category: 'childish' },
      { name: 'диван', category: 'sofas' },
      { name: 'стол стул', category: 'tables-and-chairs' },
    ] // перенести в БД
    const prefix = initialCategories.find((item) => item.category === obj.category)
    const title = prefix?.name + ' ' + obj.title
    const searchElements = title.toLowerCase() // потом можно добавить что-то еще
    return {
      _id: obj._id,
      search: searchElements
    }
  }

  private async searchElements(data, value) {
    const searchElements = await data.map(obj => this.getPrefixItem(obj))
    return await searchElements.filter((obj) => {
      return obj.search.indexOf(value.toLowerCase()) !== -1
    })
  }
}
