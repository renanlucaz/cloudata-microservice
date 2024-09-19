import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@app/entities/User';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}
  async createNewUser(user: User): Promise<void> {
    const prismaUserData = PrismaUserMapper.toPrisma(user);

    await this.prismaService.tb_usuarios.create({ data: prismaUserData });
  }

  async getUserList(): Promise<User[]> {
    const users = await this.prismaService.tb_usuarios.findMany();

    return users.map(PrismaUserMapper.toDomain);
  }
}
