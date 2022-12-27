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
    const { minMaxPrice, colors, styles, material, tags } = filters

    const findPrice = await this.filterPrice(data, minMaxPrice)
    const findColors = await this.filterColors(findPrice, colors)
    const findStyles = await this.filterStyles(findColors, styles)
    const findMaterial = await this.filterMaterial(findStyles, material)
    const resultAllFilters = await this.filterTags(findMaterial, tags)

    return { data: resultAllFilters, minMaxPrice: this.getFormatPrice(resultAllFilters) }
  }

  private async filterPrice(data, minMaxPrice) {
    const minPrice = minMaxPrice[0]
    const maxPrice = minMaxPrice[1]

    if (minPrice !== 0 && maxPrice !== 0) {
      return await data.filter((obj) => {
        return obj.price >= minPrice && obj.price <= maxPrice
      })
    } else {
      return await data
    }
  }

  private getFormatPrice(data) {
    if (data.length) {
      const price = data.map((obj: any) => obj.price)
      const minPrice = Math.min(...price)
      const maxPrice = Math.max(...price)

      const minLastValue = minPrice % 5000
      const maxLastValue = maxPrice % 5000
      return [minPrice - (5000 + minLastValue) + 5000, maxPrice + (5000 - maxLastValue)]
    } else {
      return [0, 0]
    }
  }

  private async filterColors(data, colors){
    if(colors.length && data.length) {

      return await data.filter((obj) => {
        const colorsFilter = obj.colors.map(item => item.nameColor)

        return colors.every((color) => {
          const isExist = colorsFilter.indexOf(color)
          return isExist !== -1;
        })

      })
    } else {
      return await data
    }
  }

  private async filterStyles(data, styles) {
    if (styles.length && data.length) {

      return await data.filter((obj) => {
        let currentStyle = obj.specs.map((item) => item.style)
        currentStyle = currentStyle.filter((item) => item).join('')

        const isExist = styles.indexOf(currentStyle)
        return isExist !== -1
      })

    } else {
      return await data
    }
  }

  private async filterMaterial(data, material) {
    if (material.length && data.length) {

      return await data.filter((obj) => {
        let currentMaterial = obj.specs.map((item) => item.material)
        currentMaterial = currentMaterial.filter((item) => item).join('')

        const isExist = material.indexOf(currentMaterial)
        return isExist !== -1
      })

    } else {
      return await data
    }
  }

  private async filterTags(data, tags) {
    if (tags.length && data.length) {

      return await data.filter((obj) => {

        return tags.some((tag) => {
          const isExist = obj.mark.indexOf(tag)
          return isExist !== -1
        })

      })

    } else {
      return await data
    }
  }
}
