import { User } from '@app/entities/User';
import { UsersRepository } from '@app/repositories/users-repository';
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface AuthServiceRequest {
  email: string;
  password: string;
}

interface AuthServiceResponse {
  accessToken: string;
  user: User;
}

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async execute({
    email,
    password,
  }: AuthServiceRequest): Promise<AuthServiceResponse> {
    const user = await this.usersRepository.findUserByEmail(email);

    const isValidCredentials = user.password === password;

    if (!isValidCredentials) {
      throw new HttpException('Erro, usuário ou senha inválidos!', 403);
    }

    const accessToken = await this.jwtService.signAsync(user.id, {
      secret: process.env.JWT_SECRET,
    });

    return { accessToken, user };
  }
}
