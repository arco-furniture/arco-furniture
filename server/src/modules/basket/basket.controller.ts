import {Body, Controller, Get, HttpCode, Post} from '@nestjs/common';
import {BasketService} from "./basket.service";
import {Auth} from "../../decorators/auth.decorator";
import {User} from "../../decorators/user.decorator";
import {BasketInfoDto} from "../../dto/basketInfo.dto";
import {BasketItemDto} from "../../dto/BasketItem.dto";
import {BasketFormDto} from "../../dto/basketForm.dto";

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @HttpCode(200)
  @Post('stage/info')
  @Auth()
  async postStageInfo(
    @User('_id') _id: string,
    @Body('info') info: BasketInfoDto,
    @Body('items') items: BasketItemDto[])
  {
    return this.basketService.postStageInfo(_id, info, items)
  }

  @HttpCode(200)
  @Get('price/preliminary')
  @Auth()
  async getCostInFormStage(@User('_id') _id: string) {
    return this.basketService.getCostInFormStage(_id)
  }

  @HttpCode(200)
  @Post('stage/order')
  @Auth()
  async postStageOne(
    @User('_id') _id: string,
    @Body('form') form: BasketFormDto)
  {
    return this.basketService.postStageOrder(_id, form)
  }

  @HttpCode(200)
  @Get('cards')
  @Auth()
  async getBasketApproval(@User('_id') _id: string) {
    return this.basketService.getBasketApproval(_id)
  }

  @HttpCode(200)
  @Get('price/approval')
  @Auth()
  async getBasketScore(@User('_id') _id: string) {
    return this.basketService.getBasketScore(_id)
  }
}