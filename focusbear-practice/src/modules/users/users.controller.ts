import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // Dependency Injection

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }
}
