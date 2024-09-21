import { JwtModule, JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { HttpModule as NestHttpModule } from '@nestjs/axios';
import { DatabaseModule } from '../database/database.module';

import { ListUsersService } from '@app/services/user/list-users.service';
import { AuthService } from '@app/services/auth/auth.service';
import { CreateUserService } from '@app/services/user/create-user.service';
import { FindUserService } from '@app/services/user/find-user.service';
import { ListAddressByIdService } from '@app/services/address/list-address-by-id.service';
import { ListEnergyStationsService } from '@app/services/energy-stations/list-energy-stations.service';
import { CreateAddressService } from '@app/services/address/create-address.service';

import { UsersController } from './controllers/users.controller';
import { AddressController } from './controllers/address.controller';
import { AuthController } from './controllers/auth.controller';
import { EnergyStationsController } from './controllers/energy-stations.controller';
import { NewsController } from './controllers/news.controller';
import { ListNewsService } from '@app/services/news/list-news.service';
import { NewsRepository } from '@app/repositories/news-repository';
import { NewsHttpClient } from './clients/news-http-client';

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
    NestHttpModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [
    AddressController,
    UsersController,
    AuthController,
    EnergyStationsController,
    NewsController,
  ],
  providers: [
    ListUsersService,
    CreateUserService,
    FindUserService,
    JwtService,
    CreateAddressService,
    ListAddressByIdService,
    AuthService,
    ListEnergyStationsService,
    ListNewsService,
    {
      provide: NewsRepository,
      useClass: NewsHttpClient,
    },
  ],
})
export class HttpModule {}
