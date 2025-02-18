import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDTO } from '../dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findOneByUsername(username);
    return user || undefined;
  }

  async createUser(username: string, password: string, confirmPassword: string): Promise<User> {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = this.userRepository.create({ name: username, password: hashedPassword });
    await this.userRepository.save(user);
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDTO): Promise<UpdateUserDTO> {
    return this.userRepository.updateUser(id, updateUserDto);
  }

  async removeUser(id: number): Promise<void> {
    await this.userRepository.removeUser(id);
  }
  
}
