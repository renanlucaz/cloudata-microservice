import { User } from '@app/entities/User';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface FindUserServiceRequest {
  userId: string;
}

interface FindUserServiceResponse {
  user: User;
}

@Injectable()
export class FindUserService {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    userId,
  }: FindUserServiceRequest): Promise<FindUserServiceResponse> {
    const user = await this.userRepository.findUserById(userId);

    return { user };
  }
}
