import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { CreateUserDTO } from '../dtos';
import { UserDTO } from '../dtos/user.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

    async findOneByUsername(username: string): Promise<UserDTO | null> {
        return this.findOne({ where: { name: username } });
  }

  async findOneById(id: number): Promise<UserDTO | null> {
    return this.findOne({ where: { id } });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDTO): Promise<UpdateUserDTO> {
    const user = await this.findOneById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const { name, email, password, confirmPassword } = updateUserDto;

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }       

    if (password) {
      user.password = password;
    }

    if (confirmPassword) {
      user.confirmPassword = confirmPassword;
    }

    return user;
  }

  async removeUser(id: number): Promise<void> {
    await this.delete(id);
  }

  async createUser(user: CreateUserDTO): Promise<User> {
    return this.save(user);
  }
}
