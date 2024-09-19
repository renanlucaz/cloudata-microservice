import { User } from '@app/entities/User';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface CreateNewUserResponse {
  user: User;
}

interface CreateNewUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateNewUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: CreateNewUserRequest): Promise<CreateNewUserResponse> {
    const { id, email, name, password } = request;

    const user = new User({ id, email, name, password });

    await this.usersRepository.createNewUser(user);

    return { user };
  }
}
