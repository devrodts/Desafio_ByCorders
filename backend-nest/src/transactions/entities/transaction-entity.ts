import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: number;

  @Column()
  date: string;

  @Column('decimal', { precision: 10, scale: 2 })
  value: number;

  @Column()
  cpf: string;

  @Column()
  card: string;

  @Column()
  time: string;

  @Column()
  storeOwner: string;

  @Column()
  storeName: string;
}
