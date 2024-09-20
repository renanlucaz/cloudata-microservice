import { User } from '@app/entities/User';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface FindUserServiceRequest {
  email: string;
}

interface FindUserServiceResponse {
  user: User;
}

@Injectable()
export class FindUserService {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    email,
  }: FindUserServiceRequest): Promise<FindUserServiceResponse> {
    const user = await this.userRepository.findUserByEmail(email);

    return { user };
  }
}
