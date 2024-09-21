import { EnergyStation } from '@app/entities/EnergyStation';

export class EnergyStationsViewModule {
  static toHTTP(energyStation: EnergyStation) {
    return {
      id: energyStation.id,
      uf: energyStation.uf,
      name: energyStation.name,
      status: energyStation.status,
      latitude: energyStation.latitude,
      longitude: energyStation.longitude,
      altitude: energyStation.altitude,
      instalationDate: energyStation.instalationDate,
    };
  }
}
