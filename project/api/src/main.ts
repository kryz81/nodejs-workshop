import { config } from 'dotenv';
config();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as multer from 'multer';
import { AppModule } from './app.module';
import { auth } from './auth.middleware';
import { APP_PORT } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(auth);
  app.use(multer({ storage: multer.memoryStorage() }).single('file'));

  await app.listen(APP_PORT);
}
bootstrap();
