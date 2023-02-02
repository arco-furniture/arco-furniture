import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.enableCors({
    origin: [
      'http://localhost:4450',
      'http://localhost:4400',
    ],
  })
  await app.setGlobalPrefix('api')
  await app.listen(process.env.PORT)
}
bootstrap();
