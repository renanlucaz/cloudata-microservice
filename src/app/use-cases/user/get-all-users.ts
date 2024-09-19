import { User } from '@app/entities/User';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface GetAllUsersResponse {
  users: User[];
}

@Injectable()
export class GetAllUsers {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<GetAllUsersResponse> {
    const users = await this.usersRepository.getUserList();

    return {
      users,
    };
  }
}
