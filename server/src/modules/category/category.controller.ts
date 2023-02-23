import {Body, Controller, HttpCode, Post, Query} from '@nestjs/common'
import {CategoryService} from "./category.service"

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @HttpCode(200)
  @Post()
  async getCategoryItems(
    @Query('value') value,
    @Query('page') page,
    @Query('sort') sort,
    @Query('price') price,
    @Body() data
  ) {
    return this.categoryService.filterCategory({ value, page, data, sort, price });
  }
}


