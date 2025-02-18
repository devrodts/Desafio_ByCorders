import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './transactions/modules';
import { TransactionEntity } from './transactions/entities';
import { AuthModule } from './auth/modules';

const databasePort = process.env.DATABASE_PORT || 5432;
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +databasePort,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [TransactionEntity],
      synchronize: true, 
    }),
    TransactionsModule,
    AuthModule,
  ],
})
export class AppModule {}
