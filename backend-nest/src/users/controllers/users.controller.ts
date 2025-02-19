import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiBody({ type: CreateUserDTO })
    async create(@Body() createUserDto: CreateUserDTO) {
    return this.usersService.createUser(createUserDto.username, createUserDto.email, createUserDto.password, createUserDto.confirmPassword);
  }

//   @Get()
//   @ApiOperation({ summary: 'Retorna todos os usuários' })
//   async findAll() {
//     return this.usersService.findAll();
//   }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um usuário pelo ID' })
  @ApiParam({ name: 'id', type: 'number' })
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id.toString());
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza as informações de um usuário' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateUserDTO })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um usuário pelo ID' })
  @ApiParam({ name: 'id', type: 'string' })
  async remove(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
