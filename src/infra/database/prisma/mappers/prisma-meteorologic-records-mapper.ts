import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';
import {
  tb_registros_meteorologicos,
  tb_enderecos,
  type tb_logradouros,
  type tb_bairros,
  type tb_municipios,
  type tb_estados,
} from '@prisma/client';

interface RawCities extends tb_municipios {
  tb_estados: tb_estados;
}

interface RawNeightborhoods extends tb_bairros {
  tb_municipios: RawCities;
}

interface RawStreets extends tb_logradouros {
  tb_bairros: RawNeightborhoods;
}

interface RawAddress extends tb_enderecos {
  tb_logradouros: RawStreets;
  tb_registros_meteorologicos?: any;
}

interface RawMeteorologicRecords extends tb_registros_meteorologicos {
  tb_enderecos: RawAddress;
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
    if (raw.tb_enderecos) {
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
        address: {
          id: raw.tb_enderecos.id_endereco,
          number: raw.tb_enderecos.numero,
          latitude: raw.tb_enderecos.latitude,
          longitude: raw.tb_enderecos.longitude,
          street: raw.tb_enderecos.tb_logradouros.nm_logradouro,
          neightborhood: raw.tb_enderecos.tb_logradouros.tb_bairros.nm_bairro,
          city: raw.tb_enderecos.tb_logradouros.tb_bairros.tb_municipios
            .nm_municipio,
          uf: raw.tb_enderecos.tb_logradouros.tb_bairros.tb_municipios
            .tb_estados.nm_estado,
        },
      };
    }

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
    };
  }
}
