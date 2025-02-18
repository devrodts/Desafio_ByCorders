import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'; // A entidade de usuário
import { AuthModule } from '../../auth/modules'; // Importa o módulo de autenticação para usá-lo se necessário

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule], 
  providers: [UsersService], 
  controllers: [UsersController], 
  exports: [UsersService], 
})
export class UsersModule {}
