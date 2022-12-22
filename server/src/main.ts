import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  await app.setGlobalPrefix('api')
  await app.listen(4000)
}
bootstrap();
