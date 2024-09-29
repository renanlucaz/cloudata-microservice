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
import {
  ListNewsService,
  NewsExternalService,
} from '@app/services/news/list-news.service';
import { NewsHttpClient } from './clients/news-http-client';
import { MeteorologicRecordsControler } from './controllers/meteorologic-records.controller';
import { ListMeteorologicRecordsService } from '@app/services/meteorologic-records/list-meteorologic-records.service';
import {
  CreateMeteorologicPrevisionService,
  MeteorologicRecordsExternalService,
} from '@app/services/meteorologic-records/create-meteorologic-prevision.service';
import { MeteorologicRecordsHttpClient } from './clients/meteorologic-records-http-client';
import { SaveMeteorologicPrevisionsService } from '@app/services/meteorologic-records/save-meteorologic-prevision.service';
import { ListFloodRiskByAddressIdService } from '@app/services/flood-risk/list-flood-risk-by-address-id.service';
import { FloodRiskController } from './controllers/flood-risk.controller';
import {
  AddressExternalService,
  GetAddressByCepService,
} from '@app/services/address/get-adderss-by-cep.service';
import {
  AddressLatlongExternalService,
  GetAddressLatlongService,
} from '@app/services/address/get-latlong-by-address.service';
import { AddressByCEPClient } from './clients/address-by-cep-http-client';
import { AddressLatlongClient } from './clients/latlong-by-address-http-client';

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
    MeteorologicRecordsControler,
    FloodRiskController,
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
    ListMeteorologicRecordsService,
    SaveMeteorologicPrevisionsService,
    CreateMeteorologicPrevisionService,
    ListFloodRiskByAddressIdService,
    GetAddressLatlongService,
    GetAddressByCepService,
    {
      provide: NewsExternalService,
      useClass: NewsHttpClient,
    },
    {
      provide: MeteorologicRecordsExternalService,
      useClass: MeteorologicRecordsHttpClient,
    },
    {
      provide: AddressExternalService,
      useClass: AddressByCEPClient,
    },
    {
      provide: AddressLatlongExternalService,
      useClass: AddressLatlongClient,
    },
  ],
})
export class HttpModule {}
