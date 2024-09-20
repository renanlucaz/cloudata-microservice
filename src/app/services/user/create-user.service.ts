import { User } from '@app/entities/User';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface CreateUserServiceResponse {
  user: User;
}

interface CreateUserServiceRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    request: CreateUserServiceRequest,
  ): Promise<CreateUserServiceResponse> {
    const { id, email, name, password } = request;

    const user = new User({ id, email, name, password });

    await this.usersRepository.createNewUser(user);

    return { user };
  }
}
