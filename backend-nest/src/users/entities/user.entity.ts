import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string; 
    
  @Column()
  confirmPassword:string

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
