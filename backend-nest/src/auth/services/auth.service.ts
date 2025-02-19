import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../../users/services/users.service';
import { LoginDTO } from '../dtos/login.dto';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { RegisterDTO } from '../dtos';
import { InvalidParamsError } from '../errors/invalid-name';
import { HttpStatusCode } from '../errors/http-status-code';
import { UserRepository } from 'src/users/repositories/user.repository';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly userRepository: UserRepository,
  ) {}


  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user; 
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDTO) {

    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user) {
      throw new Error('Usuário ou senha inválidos');
    }
    console.log(user)

    const payload: JwtPayload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async createUser(email: string, username: string, password: string, confirmPassword: string): Promise<User> { 
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = this.userRepository.create({ 
      email: email, 
      username: username, 
      password: hashedPassword, 
      confirmPassword: hashedPassword 
    });
    await this.userRepository.save(user);
    return user;
  }

  async check(req: Request) {
    return req.json();
  }
  
}
