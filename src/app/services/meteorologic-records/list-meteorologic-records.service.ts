import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';
import { MeteorologicRecordsRepository } from '@app/repositories/meteorologic-records.repository';
import { Injectable } from '@nestjs/common';

interface ListMeteorologicRecordsServiceRequest {
  startDate: Date;
  endDate: Date;
}

interface ListMeteorologicRecordsServiceResponse {
  meteorologicRecords: MeteorologicRecord[];
}

@Injectable()
export class ListMeteorologicRecordsService {
  constructor(
    private metereologicRecordsRepository: MeteorologicRecordsRepository,
  ) {}

  async execute({
    startDate,
    endDate,
  }: ListMeteorologicRecordsServiceRequest): Promise<ListMeteorologicRecordsServiceResponse> {
    const meteorologicRecords =
      await this.metereologicRecordsRepository.listMeteorologicRecordsByDate(
        startDate,
        endDate,
      );

    return { meteorologicRecords };
  }
}
