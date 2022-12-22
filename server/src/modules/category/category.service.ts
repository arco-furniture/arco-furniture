import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "../../schemas/product.schema";
import {Model} from "mongoose";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async filterCategory(value, data) {
    const categoryItems = await this.productModel.find({category: value})
    return this.mainFilters([...categoryItems], data) // фильтрая
  }

  private async mainFilters(data, filters) {
    const { colors, styles, material, tags } = filters

    const findColors = await this.filterColors(data, colors)
    // const findStyles = this.filterStyles(findColors, styles)

    return findColors
  }

  private async filterColors(data, colors){
    if(colors.length >= 1 && data.length >= 1) {

      return await data.filter((obj) => {
        const itemsColor = obj.colors.map(item => item.nameColor)

        return colors.every((color) => {
          const isExist = itemsColor.indexOf(color)
          return isExist !== -1;
        })
      })
    } else {
      return await data
    }
  }

  // private async filterStyles(data, colors){
  //   return await data.find({ "colors.nameColor":  })
  // }

}
