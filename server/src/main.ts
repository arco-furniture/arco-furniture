import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.enableCors({
    origin: [
      'http://localhost:4400',
      'http://localhost:4450',
      'https://localhost:4450',
      'https://localhost:4400',
      'https://acro-furniture.tk',
      'http://acro-furniture.tk',
    ],
  })
  await app.setGlobalPrefix('api')
  await app.listen(process.env.PORT)
  await console.log(`App started, PORT: ${process.env.PORT}`)
}
bootstrap();
