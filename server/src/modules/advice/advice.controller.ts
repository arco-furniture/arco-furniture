import {Controller, Get, HttpCode, Query} from '@nestjs/common';
import { AdviceService } from './advice.service'
import {filterAdviceValueDto} from "../../dto/filterAdviceValue.dto";
import {ItemDto} from "../../dto/item.dto";

@Controller('advice')
export class AdviceController {
  constructor(private readonly adviceService: AdviceService) {}

  @HttpCode(200)
  @Get('/filter')
  getAdviceItems(@Query() reqParam: filterAdviceValueDto) {
    return this.adviceService.findCurrentAdvice(reqParam.value)
  }

  @HttpCode(200)
  @Get('/top')
  getTopProduct(): Promise<ItemDto[]> {
    return this.adviceService.getTopProduct()
  }

  @HttpCode(200)
  @Get()
  getAllAdvice() {
    return this.adviceService.getAll()
  }
}
