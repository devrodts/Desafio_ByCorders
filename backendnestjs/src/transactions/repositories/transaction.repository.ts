import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TransactionEntity } from '../entities/transaction-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTransactionDTO } from '../dtos';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly repository: Repository<TransactionEntity>,
  ) {}

  async save(transactionData: CreateTransactionDTO): Promise<TransactionEntity> {
    const transaction = this.repository.create(transactionData);
    return this.repository.save(transaction);
  }

  async findAll(): Promise<TransactionEntity[]> {
    return this.repository.find();
  }

  async findByStore(storeName: string): Promise<TransactionEntity[]> {
    return this.repository.find({ where: { storeName } });
  }
}
