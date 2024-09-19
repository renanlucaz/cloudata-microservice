import { GetAllUsers } from '@app/use-cases/user/get-all-users';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { CreateNewUser } from '@app/use-cases/user/create-new-user';
import { UserViewModel } from '../view-module/user-view-model';
import { randomUUID } from 'node:crypto';

@Controller('users')
export class UsersController {
  constructor(
    private getAllUsers: GetAllUsers,
    private createNewUser: CreateNewUser,
  ) {}

  @Get()
  async getAll() {
    const { users } = await this.getAllUsers.execute();

    return {
      users: users.map(UserViewModel.toHTTP),
    };
  }

  @Post()
  async create(@Body() body: CreateUserDTO) {
    const { email, name, password } = body;

    const { user } = await this.createNewUser.execute({
      id: randomUUID(),
      email,
      name,
      password,
    });

    return user;
  }
}
