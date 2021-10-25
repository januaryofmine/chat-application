import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Server listing on ${process.env.PORT}`);
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
