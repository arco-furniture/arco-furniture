import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {ProductsModule} from "../products/products.module";
import {AdviceModule} from "../advice/advice.module";
import {CategoryModule} from "../category/category.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/arco'),
    AdviceModule,
    ProductsModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
