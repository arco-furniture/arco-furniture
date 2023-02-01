import {Controller, Get, Param} from '@nestjs/common';
import {SearchService} from "./search.service";


@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get(':value')
  findItemsForSearch(@Param('value') value: string ) {
    return this.searchService.findItemsForSearch(value)
  }
}
