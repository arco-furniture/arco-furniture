import {Body, Controller, Get, Post} from '@nestjs/common';
import {createProductDto} from "./dto/create-product.dto";
import {ProductsService} from "./products.service";
import {ProductsModule} from "./products.module";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Get()
  getAllProducts(): Promise<ProductsModule> {
    return this.productsService.getAll()
  }

  @Post()
  postProduct(@Body() createProduct: createProductDto): Promise<ProductsModule> {
    return this.productsService.createProduct(createProduct)
  }
}
