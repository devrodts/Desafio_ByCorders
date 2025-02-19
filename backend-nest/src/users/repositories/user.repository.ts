import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { CreateUserDTO } from '../dtos';
import { UserDTO } from '../dtos/user.dto';


@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

    async findOneByUsername(username: string): Promise<UserDTO | null> {
        const user = await this.findOne({ where: { username: username } });
        if (!user) {  
            throw new NotFoundException('Usuário não encontrado');
        }
        
        return user;
  }

  async findOneById(id: string): Promise<UserDTO | null> {
    return this.findOne({ where: { id } });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDTO): Promise<UpdateUserDTO> {

    const user = await this.findOneById(id);


    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const { username, email, password, } = updateUserDto;

    if (username) {
      user.username = username;
    }

    if (email) {
      user.email = email;
    }       

    if (password) {
      user.password = password;
    }


    const updatedUser = await this.save(user);
    return updatedUser;
  }

  async removeUser(id: number): Promise<void> {
    await this.delete(id);
  }

  async createUser(user: CreateUserDTO): Promise<User> {
    const newUser = this.create({
        username: user.username,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return this.save(newUser);
  }
}
