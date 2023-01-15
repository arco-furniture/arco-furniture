import {Body, Controller, Get, Post, Param, HttpCode} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {ProductModel} from "../../models/product.model";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @HttpCode(200)
  @Get()
  getAllProducts() {
    return this.productsService.getAll()
  }

  @HttpCode(200)
  @Get(':id')
  getProduct(@Param('id') id: string ): Promise<ProductModel[]> {
    return this.productsService.getProductItem(id)
  }

  @HttpCode(200)
  @Post()
  postProduct(@Body() createProduct: ProductModel): Promise<ProductModel> {
    return this.productsService.createProduct(createProduct)
  }
}