import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from '../controllers';
import { TransactionsService } from '../services/transaction.service';
import { TransactionEntity } from '../entities/transaction-entity';
import { TransactionRepository } from '../repositories';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity])],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionRepository],
  exports: [TransactionsService],
})
export class TransactionsModule {}
