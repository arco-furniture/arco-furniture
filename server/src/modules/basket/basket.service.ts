import {Injectable, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {UserModel} from "../../models/user.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {BasketInfoDto} from "../../dto/basketInfo.dto";
import {BasketItemDto} from "../../dto/BasketItem.dto";
import {ProductModel} from 'src/models/product.model';

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
    @InjectModel(ProductModel) private ProductModel: ModelType<ProductModel>
  ) {}

  async postStageInfo(id: string, info: BasketInfoDto, items: BasketItemDto[]) {
    const user = await this.checkUser(id)

    if (!items) throw new Error('Корзина пустая')
    if (Object.keys(info).length === 0) throw new Error('Нет данных формы')

    user.steps = {info, form: null}
    user.basketItems = items
    await user.save()
    return this.returnUserFields(user)
  }

  async getCostInFormStage(id: string) {
    const user = await this.checkUser(id)
    const basket = await this.getBasketUser(user.basketItems)

    const discount = await this.reduceItems(basket, "oldPrice")
    const price = await this.reduceItems(basket, "price")
    const gap = discount - price

    return {
      discount,
      gap,
      price: price
    }
  }

  async postStageOrder(id: string, form) {
    const user = await this.checkUser(id)
    const info = await user.steps.info

    user.steps = { form: form, info: info }
    await user.save()

    return this.returnUserFields(user)
  }

  async getBasketApproval(id: string) {
    const user = await this.UserModel.findById(id)
    let basketParas = await user.basketItems
    return await this.getBasketUser(basketParas)
  }

  private async getBasketUser(params) {
    params = [...params]
    const arrayId = await params.map((item) =>  item._id)
    let cards = await this.getCards(arrayId)
    const res = await cards.map((item) => {
      const count = this.getParamCard(item._id, params, 'count')
      return {
        _id: item._id,
        count: count,
        title: item.title,
        category: item.category,
        article: item.article,
        specs: item.specs,
        price: count * item.price,
        oldPrice: count * item.oldPrice,
        color: this.getParamCard(item._id, params, 'color'),
        image: item.cardImages.length ? item.cardImages[0].image : null,
      }
    })
    return await res
  }

  private getParamCard(id, params, name) {
    const currentParam = params.find((item) => item._id === id)
    return currentParam[name]
  }

  async getBasketScore(id) {
    const user = await this.checkUser(id)
    const basket = await this.getBasketUser(user.basketItems)
    const allPrice = await this.reduceItems(basket, "price")
    const dataSolvency = await this.getIsSolvency(user.money, allPrice)
    return {
      allPrice: allPrice,
      userMoney: user.money,
      solvency: dataSolvency,
    }
  }

  private async getIsSolvency(userMoney, allPrice) {
    const res = Boolean(userMoney - allPrice >= 0)
    if (res) {
      return {
        pay: true,
        info: null
      }
    } else {
      return {
        pay: false,
        info: 'Недостаточно средств'
      }
    }
  }

  private async reduceItems(basket, name) {
    return await basket.reduce((sum, current) => { return sum + current[name] }, 0)
  }

  private async getCards(arrayId) {
    const cards = await this.ProductModel.find({ _id: { $in: arrayId }});
    if (cards) return JSON.parse(JSON.stringify(cards))
  }

  private async checkUser(id) {
    const user = await this.UserModel.findById(id)
    if (!user) throw new UnauthorizedException('Такого пользователя не существует')
    return user
  }

  private returnUserFields(user) {
    return {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      avatar: user.avatar,
      money: user.money,
      steps: user.steps,
      basketItems: user.basketItems,
    }
  }
}