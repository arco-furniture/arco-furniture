import {Injectable} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {ProductModel} from 'src/models/product.model';
import {OrderModel} from "../../models/order.model";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(ProductModel) private ProductModel: ModelType<ProductModel>,
    @InjectModel(OrderModel) private OrderModel: ModelType<OrderModel>
  ) {
  }

  async postNewOrder(dto) {
    const lastOrder = await this.OrderModel.find().limit(1).sort({$natural: -1})
    let lastArticle = null
    if (lastOrder.length) {
      lastArticle = await [...lastOrder][0].article
    }
    const model = new this.OrderModel({
      firstName: dto.firstName,
      basketItems: dto.basketItems,
      allPrice: dto.allPrice,
      article: lastArticle ? lastArticle + 1 : 1,
    })

    await model.save()
  }

  async getHomeStats() {
    let lastOrder = [...await this.OrderModel.find().limit(1).sort({$natural: -1})]

    if (!lastOrder.length) return null

    const chart = await this.getHomeChart()

    return {
      firstName: lastOrder[0].firstName,
      allPrice: lastOrder[0].allPrice,
      chart
    }
  }

  private async getHomeChart() {
    const monthArray = [
      'янв.',
      'февр.',
      'марта',
      'апр.',
      'мая',
      'июня',
      'июля',
      'авг.',
      'сент.',
      'окт.',
      'нояб.',
      'дек.'
    ]

    let currentDate = new Date().getTime()
    const twoWeekDate = currentDate - 1209600000
    const data = await this.getLocalData(twoWeekDate, monthArray)

    const orders = await this.OrderModel.find({createdAt: {$gte: twoWeekDate}})
    const dateArray = [...orders].map((item) => {
      const day = String(item.createdAt.getUTCDate())

      data.map((dataItem, index) => {
        if (dataItem.day.split(' ')[0] === day) {
          data[index].price.push(item.allPrice)
        }
      })
    })

    return data
  }

  private async getLocalData(twoWeekDate, monthArray) {
    const thoWeekDay = new Date(twoWeekDate).getDate()
    const rightDay = thoWeekDay + 14
    const data = []
    let currentDaily = 0

    for (let i = thoWeekDay; i <= rightDay; i++) {
      const indexMonth = new Date(currentDaily + twoWeekDate).getMonth()
      const day = new Date(currentDaily + twoWeekDate).getDate()
      currentDaily += 86400000
      data.push({
        day: day + ' ' + monthArray[indexMonth],
        price: []
      })
    }
    return data
  }
}