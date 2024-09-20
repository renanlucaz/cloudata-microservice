import { User } from '@app/entities/User';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface ListUsersServiceResponse {
  users: User[];
}

@Injectable()
export class ListUsersService {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<ListUsersServiceResponse> {
    const users = await this.usersRepository.getUserList();

    return {
      users,
    };
  }
}
