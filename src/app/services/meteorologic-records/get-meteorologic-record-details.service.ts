import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';
import { MeteorologicRecordsRepository } from '@app/repositories/meteorologic-records.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetMeteorologicRecordDetailsService {
  constructor(
    private metereologicRecordsRepository: MeteorologicRecordsRepository,
  ) {}

  async execute(meteorologicRecordId: string): Promise<MeteorologicRecord> {
    const meteorologicRecordDetails =
      await this.metereologicRecordsRepository.getMeteorologicRecordDetails(
        meteorologicRecordId,
      );

    return meteorologicRecordDetails;
  }
}
