import { IsInt, IsNumber, IsString, Length } from 'class-validator';

export class CreateTransactionDTO{

  @IsInt()
  type: number;

  @IsString()
  @Length(8, 8)
  date: string;

  @IsNumber()
  value: number;

  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsString()
  @Length(12, 12)
  card: string;

  @IsString()
  @Length(6, 6)
  time: string;

  @IsString()
  @Length(1, 14)
  storeOwner: string;

  @IsString()
  @Length(1, 19)
  storeName: string;
}
