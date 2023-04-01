import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 23 },
    { id: 3, firstName: 'Jim', lastName: 'Beam', age: 30 },
  ];

  async getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  getUsers() {
    return this.users;
  }
}
