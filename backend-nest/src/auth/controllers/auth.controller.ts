import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDTO, RegisterDTO} from '../dtos/index';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDTO) {
    return this.authService.login(loginDto); // Chama o serviço de login
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDTO) {
    return this.authService.createUser(registerDto.email, registerDto.username, registerDto.password, registerDto.confirmPassword); // Chama o serviço de registro
  }
}
