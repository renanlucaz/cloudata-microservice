import { EnergyStationRepository } from '@app/repositories/energy-station.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaEnergyStationMapper } from '../mappers/prisma-energy-station-mapper';

@Injectable()
export class PrismaEnergyStationsRepository implements EnergyStationRepository {
  constructor(private prismaService: PrismaService) {}

  async listEnergyStations(): Promise<any[]> {
    const energyStations =
      await this.prismaService.tb_estacoes_energia.findMany();

    return energyStations.map(PrismaEnergyStationMapper.toDomain);
  }
}
