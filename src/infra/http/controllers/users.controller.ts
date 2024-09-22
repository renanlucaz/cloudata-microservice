import { ListUsersService } from '@app/services/user/list-users.service';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { CreateUserService } from '@app/services/user/create-user.service';
import { UserViewModel } from '../view-module/user-view-model';
import { randomUUID } from 'node:crypto';
import { FindUserService } from '@app/services/user/find-user.service';
import { AuthGuard } from '@app/guards/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private listUsersService: ListUsersService,
    private createNewUser: CreateUserService,
    private findUserById: FindUserService,
  ) {}

  @UseGuards(AuthGuard)
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

    return UserViewModel.toHTTP(user);
  }

  @UseGuards(AuthGuard)
  @Get(':email')
  async findById(@Param('email') email: string) {
    const { user } = await this.findUserById.execute({ email });

    return UserViewModel.toHTTP(user);
  }
}
