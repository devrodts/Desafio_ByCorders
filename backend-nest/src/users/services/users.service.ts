import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email: username } });
    return user || undefined;
  }

  async createUser(
    email: string, 
    username: string, 
    password: string, 
    confirmPassword: string
  ): Promise<User> { 

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = this.userRepository.create(
      { email: email, 
        username: username, 
        password: hashedPassword, 
        confirmPassword: hashedPassword 
      }
    );
    await this.userRepository.save(user);
    return user;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDTO): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
  
    const { username, email, password } = updateUserDto;
  
    if (email) {
      user.email = email;
    }      
    
    if (username) {
      user.username = username;
    }
  
    if (password) {
      user.password = password;
    }

    await this.userRepository.save(user);
    return user;
  }
  

  async removeUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
  
}
