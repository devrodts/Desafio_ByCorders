import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './transactions/modules';
import { TransactionEntity } from './transactions/entities';
import { AuthModule } from './auth/modules';
import { UsersModule } from './users/modules/user.module';
import { User } from './users/entities/user.entity';
import { UserRepository } from './users/repositories/user.repository';
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
      entities: [TransactionEntity, User, UserRepository],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([User]),
    TransactionsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
