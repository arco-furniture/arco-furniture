import { Controller, Get, HttpCode } from '@nestjs/common';
import {OrderService} from "./order.service";

@Controller('order')
export class OrderController {
  constructor(private readonly OrderService: OrderService) {}

  @HttpCode(200)
  @Get('home/stats')
  async getHomeStats () {
    return this.OrderService.getHomeStats()
  }
}
