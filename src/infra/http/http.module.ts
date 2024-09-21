import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { ListUsersService } from '@app/services/user/list-users.service';
import { AuthService } from '@app/services/auth/auth.service';
import { CreateUserService } from '@app/services/user/create-user.service';
import { FindUserService } from '@app/services/user/find-user.service';
import { ListAddressByIdService } from '@app/services/address/list-address-by-id.service';
import { ListEnergyStationsService } from '@app/services/energy-stations/list-energy-stations.service';
import { CreateAddressService } from '@app/services/address/create-address.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { UsersController } from './controllers/users.controller';
import { AddressController } from './controllers/address.controller';
import { AuthController } from './controllers/auth.controller';
import { EnergyStationsController } from './controllers/energy-stations.controller';

@Module({
  imports: [
    DatabaseModule,
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
  ],
})
export class HttpModule {}
