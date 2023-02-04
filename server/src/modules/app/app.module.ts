import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProductsModule} from "../products/products.module";
import {AdviceModule} from "../advice/advice.module";
import {CategoryModule} from "../category/category.module";
import {SearchModule} from "../search/search.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypegooseModule} from "nestjs-typegoose";
import {getMongoConfig} from "../../config/mongo.config";
import {AuthModule} from "../auth/auth.module";
import {ProfileModule} from "../profile/profile.module";
import {BasketModule} from "../basket/basket.module";
import {OrderModule} from "../order/order.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
    AdviceModule,
    ProductsModule,
    CategoryModule,
    SearchModule,
    AuthModule,
    ProfileModule,
    BasketModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
