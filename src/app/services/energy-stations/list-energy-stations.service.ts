import { EnergyStation } from '@app/entities/EnergyStation';
import { EnergyStationRepository } from '@app/repositories/energy-station.repository';
import { Injectable } from '@nestjs/common';

interface ListEnergyStationsServiceResponse {
  energyStations: EnergyStation[];
}

@Injectable()
export class ListEnergyStationsService {
  constructor(private energyStationRepository: EnergyStationRepository) {}

  async execute(): Promise<ListEnergyStationsServiceResponse> {
    const energyStations =
      await this.energyStationRepository.listEnergyStations();

    return { energyStations };
  }
}
