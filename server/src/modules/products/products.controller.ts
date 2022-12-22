import {Body, Controller, Get, Post, Param} from '@nestjs/common';
import {createProductDto} from "../../dto/createProduct.dto";
import {ProductsService} from "./products.service";
import { Product } from '../../schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAll()
  }

  @Get(':id')
  getProduct(@Param('id') id: string ): Promise<Product[]> {
    return this.productsService.getProductItem(id)
  }

  @Post()
  postProduct(@Body() createProduct: createProductDto): Promise<Product> {
    return this.productsService.createProduct(createProduct)
  }
}
