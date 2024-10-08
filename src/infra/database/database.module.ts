import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersRepository } from '@app/repositories/users-repository';
import { AddressRepository } from '@app/repositories/address-repository';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';
import { PrismaAddressRepository } from './prisma/repositories/prisma-address-repository';
import { EnergyStationRepository } from '@app/repositories/energy-station.repository';
import { PrismaEnergyStationsRepository } from './prisma/repositories/prisma-energy-stations.repository';
import { MeteorologicRecordsRepository } from '@app/repositories/meteorologic-records.repository';
import { PrismaMeteorologicRecordsRepository } from './prisma/repositories/prisma-meteorologic-records.repository';
import { FloodRiskRepository } from '@app/repositories/flood-risk-repository';
import { PrismaFloodRiskRepository } from './prisma/repositories/prisma-flood-risk-repository';

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
    {
      provide: EnergyStationRepository,
      useClass: PrismaEnergyStationsRepository,
    },
    {
      provide: MeteorologicRecordsRepository,
      useClass: PrismaMeteorologicRecordsRepository,
    },
    {
      provide: FloodRiskRepository,
      useClass: PrismaFloodRiskRepository,
    },
  ],
  exports: [
    UsersRepository,
    AddressRepository,
    EnergyStationRepository,
    MeteorologicRecordsRepository,
    FloodRiskRepository,
  ],
})
export class DatabaseModule {}
