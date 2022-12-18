import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {ProductsModule} from "./products/products.module";

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/mestodb')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
