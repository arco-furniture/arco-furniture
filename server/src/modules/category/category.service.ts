import {Injectable} from '@nestjs/common';
import {ModelType} from "@typegoose/typegoose/lib/types";
import {ProductModel} from "../../models/product.model";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(ProductModel) private productModel: ModelType<ProductModel>) {}

  async filterCategory(filters) {
    const { value, page, data, sort } = filters
    const categoryItems = await this.productModel.find({category: value})
    return this.getAllFilters([...categoryItems], data, page, sort)
  }

  private async getAllFilters(data, filters, page, sort) {
    const { minMaxPrice, colors, styles, material, tags } = filters

    const findPrice = await this.filterPrice(data, minMaxPrice)
    const findColors = await this.filterColors(findPrice, colors)
    const findStyles = await this.filterStyles(findColors, styles)
    const findMaterial = await this.filterMaterial(findStyles, material)
    const resultAllFilters = await this.filterTags(findMaterial, tags)
    const sortItems = await this.getSortItems(resultAllFilters, sort)

    return {
      data: this.getResultPage(sortItems, page),
      allPages: this.getCountAllPages(resultAllFilters),
      // minMaxPrice: this.getFormatPrice(resultAllFilters),
    }
  }

  private async getSortItems(data, sort) {
    const isTitle = sort === 'title'
    const result = isTitle ? this.sortTitle(data) : this.sortNumbers(data, sort)
    return await result
  }

  private async sortTitle(data) {
    return data.sort((a, b) => {
      if (a.title < b.title) return -1
      if (a.title > b.title) return 1
      return 0
    })
  }
  private async sortNumbers(data, sort) {
    return data.sort((a, b) => {
      return a[sort] - b[sort]
    })
  }


  private getResultPage (data, currentPage) {
    const itemsForPage = 6; // вынести в енв
    const result = [];
    for (let i = 0; i <data.length; i += itemsForPage) {
      result.push(data.slice(i, i + itemsForPage));
    }
    return result[currentPage - 1] || []
  }

  private getCountAllPages(data) {
    const itemsForPage = 6; // вынести в енв
    return Math.round(data.length / itemsForPage) || 1
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
