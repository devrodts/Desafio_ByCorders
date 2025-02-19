import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    allowedHeaders: ['content-type'],
    origin: '*',
    credentials: true,
  }));

  app.useGlobalPipes(new ValidationPipe({transform: true}))

  app.enableCors({
    origin: ['http://localhost:5173', '*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
