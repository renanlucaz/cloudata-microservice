import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';
import { MeteorologicRecordsRepository } from '@app/repositories/meteorologic-records.repository';
import { Injectable } from '@nestjs/common';

interface ListMeteorologicRecordsServiceRequest {
  startDate: Date;
  endDate: Date;
  addressId: string;
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
    addressId,
  }: ListMeteorologicRecordsServiceRequest): Promise<ListMeteorologicRecordsServiceResponse> {
    const meteorologicRecords =
      await this.metereologicRecordsRepository.listMeteorologicRecordsByAddressId(
        startDate,
        endDate,
        addressId,
      );

    return { meteorologicRecords };
  }
}
