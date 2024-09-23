import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';

interface MeteorologicRecordProps extends MeteorologicRecord {
  endereco: any;
}

export class MeteorologicRecordsViewModule {
  static toHTTP(meteorologicRecord: MeteorologicRecordProps) {
    return {
      id: meteorologicRecord.id,
      rainProb: meteorologicRecord.rainProb,
      maxHumidity: meteorologicRecord.maxHumidity,
      minHumidity: meteorologicRecord.minHumidity,
      minWindSpeed: meteorologicRecord.minWindSpeed,
      maxWindSpeed: meteorologicRecord.maxWindSpeed,
      minTemperature: meteorologicRecord.minTemperature,
      maxTemperature: meteorologicRecord.maxTemperature,
      description: meteorologicRecord.description,
      latitude: meteorologicRecord.latitude,
      longitude: meteorologicRecord.longitude,
      registerType: meteorologicRecord.registerType,
      registerDate: meteorologicRecord.registerDate,
      endereco: meteorologicRecord.endereco,
    };
  }
}
