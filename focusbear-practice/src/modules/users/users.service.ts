import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, name: 'Albert Novell Enabe' },
    { id: 2, name: 'Albert Kelvin Enabe' },
    { id: 3, name: 'Albert Russel Enabe' },
  ];

  findAll() {
    return this.users;
  }
}
