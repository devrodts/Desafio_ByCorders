import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository'; 
import { AuthModule } from '../../auth/modules';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    forwardRef(() => AuthModule),
  ],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
  exports: [UsersService, UserRepository],
})
export class UsersModule {}
