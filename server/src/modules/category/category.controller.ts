import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common'
import {CategoryService} from "./category.service"

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  getCategoryItems(@Query('value') value, @Body() data) {
   return this.categoryService.filterCategory(value, data);
  }
}


