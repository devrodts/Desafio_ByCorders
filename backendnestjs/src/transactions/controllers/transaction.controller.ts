import {
    Controller,
    Get,
    Post,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { TransactionsService } from '../services/transaction.service';
  import { Express } from 'express';
  @Controller('transactions')
  export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}
  
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
      await this.transactionsService.parseCNAB(file.buffer);
      return { message: 'Arquivo processado com sucesso!' };
    }
  
    @Get()
    async getAllTransactions() {
      return this.transactionsService.getAllTransactions();
    }
  }
  