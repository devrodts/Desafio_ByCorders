import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../../users/services/users.service';
import { LoginDTO } from '../dtos/login.dto';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { RegisterDTO } from '../dtos';
import { InvalidParamsError } from '../errors/invalid-name';
import { HttpStatusCode } from '../errors/http-status-code';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
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

    const payload: JwtPayload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload), // Gera o token JWT
    };
  }

  async register(registerDto: RegisterDTO) {
    const { name, email, password, confirmPassword } = registerDto;

    if (password !== confirmPassword) {
      throw new Error('As senhas não coincidem');
    }
    if (name === null || email === null || password === null || confirmPassword === null) {
      throw new InvalidParamsError('Todos os campos são obrigatórios', HttpStatusCode.BAD_REQUEST);
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await this.usersService.createUser(name, hashedPassword, confirmPassword);

    return user;
  }
}
