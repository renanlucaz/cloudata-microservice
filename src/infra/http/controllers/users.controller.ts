import { GetAllUsers } from '@app/use-cases/user/get-all-users';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { CreateNewUser } from '@app/use-cases/user/create-new-user';

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
      users: users.map((user) => ({
        id: user.id,
        email: user.email,
        name: user.name,
      })),
    };
  }

  @Post()
  async create(@Body() body: CreateUserDTO) {
    const { email, name, password } = body;

    const { user } = await this.createNewUser.execute({
      email,
      name,
      password,
    });

    return user;
  }
}
