import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersRepository } from '@app/repositories/users-repository';
import { AddressRepository } from '@app/repositories/address-repository';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';
import { PrismaAddressRepository } from './prisma/repositories/prisma-address-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository,
    },
  ],
  exports: [UsersRepository, AddressRepository],
})
export class DatabaseModule {}
