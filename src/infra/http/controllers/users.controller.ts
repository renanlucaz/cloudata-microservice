import { ListUsersService } from '@app/services/user/list-users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { CreateUserService } from '@app/services/user/create-user.service';
import { UserViewModel } from '../view-module/user-view-model';
import { randomUUID } from 'node:crypto';
import { FindUserService } from '@app/services/user/find-user.service';

@Controller('users')
export class UsersController {
  constructor(
    private listUsersService: ListUsersService,
    private createNewUser: CreateUserService,
    private findUserById: FindUserService,
  ) {}

  @Get()
  async getAll() {
    const { users } = await this.listUsersService.execute();

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

  @Get(':id')
  async findById(@Param('id') id: string) {
    const { user } = await this.findUserById.execute({ userId: id });

    return UserViewModel.toHTTP(user);
  }
}
