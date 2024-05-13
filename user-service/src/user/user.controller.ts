// users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto'; // Import CreateUserDto
import { UserService } from './user.service';
import { User } from './Schema/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
