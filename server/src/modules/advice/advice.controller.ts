import {Controller, Get, Query} from '@nestjs/common';
import { AdviceService } from './advice.service'
import {filterAdviceValueDto} from "../../dto/filterAdviceValue.dto";

@Controller('advice')
export class AdviceController {
  constructor(private readonly adviceService: AdviceService) {}

  @Get('/filter')
  getAdviceItems(@Query() reqParam: filterAdviceValueDto) {
    return this.adviceService.findCurrentAdvice(reqParam.value)
  }

  @Get()
  getAllAdvice() {
    return this.adviceService.getAll()
  }
}
