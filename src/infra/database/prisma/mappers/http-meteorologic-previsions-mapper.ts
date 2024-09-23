import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';
import { randomUUID } from 'node:crypto';

interface RawMeteorologicRecord {
  id: string;
  date: Date;
  humidity: {
    min: number;
    max: number;
  };
  rain: {
    probability: number;
  };
  wind: {
    velocity_min: number;
    velocity_max: number;
  };
  text_icon: {
    text: {
      pt: string;
    };
  };
  temperature: {
    min: number;
    max: number;
  };
}

export class HttpMeteorologicRecordMapper {
  static toDomain(raw: RawMeteorologicRecord) {
    return new MeteorologicRecord({
      id: randomUUID(),
      description: raw.text_icon.text.pt,
      maxHumidity: raw.humidity.max,
      maxTemperature: raw.temperature.max,
      maxWindSpeed: raw.wind.velocity_max,
      minHumidity: raw.humidity.min,
      minTemperature: raw.temperature.min,
      minWindSpeed: raw.wind.velocity_min,
      rainProb: raw.rain.probability,
      registerDate: raw.date,
      registerType: '02',
    });
  }
}
