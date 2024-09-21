import { tb_estacoes_energia as RawEnergyStation } from '@prisma/client';

export class PrismaEnergyStationMapper {
  static toDomain(raw: RawEnergyStation) {
    return {
      id: raw.id_estacao,
      uf: raw.uf,
      name: raw.nome,
      status: raw.status,
      latitude: raw.latitude,
      longitude: raw.longitude,
      altitude: raw.altitude,
      instalationDate: raw.dt_instalacao,
    };
  }
}
