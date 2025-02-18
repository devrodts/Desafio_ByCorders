import { Injectable } from '@nestjs/common';
import { TransactionRepository } from '../repositories/transaction.repository';
import { CreateTransactionDTO } from '../dtos';

@Injectable()
export class TransactionsService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async createTransaction(transactionDto: CreateTransactionDTO) {
    return this.transactionRepository.save(transactionDto);
  }

  async getAllTransactions() {
    return this.transactionRepository.findAll();
  }

  async getTransactionsByStore(storeName: string) {
    return this.transactionRepository.findByStore(storeName);
  }

  async parseCNAB(fileBuffer: Buffer): Promise<void> {
    const fileContent = fileBuffer.toString();
    const lines = fileContent.split('\n');

    for (const line of lines) {
      if (line.trim() === '') continue;

      const transactionDto: CreateTransactionDTO = {
        type: +line[0],
        date: line.substring(1, 9),
        value: +line.substring(9, 19) / 100,
        cpf: line.substring(19, 30),
        card: line.substring(30, 42),
        time: line.substring(42, 48),
        storeOwner: line.substring(48, 62).trim(),
        storeName: line.substring(62, 81).trim(),
      };

      await this.createTransaction(transactionDto);
    }
  }
}
