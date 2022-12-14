import {Controller, Get, Param} from '@nestjs/common';
import {SearchService} from "./search.service";
import {ProductModel} from "../../models/product.model";


@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get(':value')
  getSearchItems(@Param('value') value: string ): Promise<ProductModel[]> {
    return this.searchService.findItemsForSearch(value)
  }
}
