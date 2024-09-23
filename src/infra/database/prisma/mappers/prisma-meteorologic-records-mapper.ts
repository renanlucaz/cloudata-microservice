import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';
import { tb_registros_meteorologicos, tb_enderecos } from '@prisma/client';

interface RawMeteorologicRecords extends tb_registros_meteorologicos {
  tb_enderecos: tb_enderecos;
}

export class PrismaMeteorologicRecordsMapper {
  static toPrisma(meteorologicRecord: MeteorologicRecord, addressId: string) {
    return {
      id_registro: meteorologicRecord.id,
      prb_chuva: meteorologicRecord.rainProb,
      umidade_max: meteorologicRecord.maxHumidity,
      umidade_min: meteorologicRecord.minHumidity,
      vel_vento_max: meteorologicRecord.maxWindSpeed,
      vel_vento_min: meteorologicRecord.minWindSpeed,
      temperatura_max: meteorologicRecord.maxTemperature,
      temperatura_min: meteorologicRecord.minTemperature,
      descricao: meteorologicRecord.description,
      latitude: meteorologicRecord.latitude,
      longitude: meteorologicRecord.longitude,
      tipo_registro: meteorologicRecord.registerType,
      dt_registro: new Date(meteorologicRecord.registerDate),
      tb_enderecos_id_endereco: addressId,
    };
  }
  static toDomain(raw: RawMeteorologicRecords) {
    return {
      id: raw.id_registro,
      rainProb: raw.prb_chuva,
      maxHumidity: raw.umidade_max,
      minHumidity: raw.umidade_min,
      minWindSpeed: raw.vel_vento_min,
      maxWindSpeed: raw.vel_vento_max,
      minTemperature: raw.temperatura_min,
      maxTemperature: raw.temperatura_max,
      description: raw.descricao,
      latitude: raw.latitude,
      longitude: raw.longitude,
      registerType: raw.tipo_registro,
      registerDate: raw.dt_registro,
      endereco: raw.tb_enderecos,
    };
  }
}
