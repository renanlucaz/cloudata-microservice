import { EnergyStation } from '@app/entities/EnergyStation';

export abstract class EnergyStationRepository {
  abstract listEnergyStations(): Promise<EnergyStation[]>;
}
