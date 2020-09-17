import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
config({ path: 'env/.env' });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT } from './config';
import { ErrorCatcher } from './error.catcher';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ErrorCatcher());

  const configService = app.get(ConfigService);

  await app.listen(configService.get<number>('APP_PORT'));
}
bootstrap();
