import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  // ... outras colunas

  @Column({ type: 'varchar', default: 'entrada' })
  nature: string;
} 