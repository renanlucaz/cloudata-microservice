import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';
import { MeteorologicRecordsRepository } from '@app/repositories/meteorologic-records.repository';
import { Injectable } from '@nestjs/common';

interface SaveMeteorologicPrevisionsServiceRequest {
  meteorologicPrevisions: MeteorologicRecord[];
  localeId: string;
}

interface SaveMeteorologicPrevisionsServiceResponse {
  meteorologicRecords: MeteorologicRecord[];
}

@Injectable()
export class SaveMeteorologicPrevisionsService {
  constructor(
    private metereologicRecordsRepository: MeteorologicRecordsRepository,
  ) {}

  async execute({
    meteorologicPrevisions,
    localeId,
  }: SaveMeteorologicPrevisionsServiceRequest): Promise<SaveMeteorologicPrevisionsServiceResponse> {
    const meteorologicRecords =
      await this.metereologicRecordsRepository.saveMeteorologicPrevisions(
        meteorologicPrevisions,
        localeId,
      );

    return { meteorologicRecords };
  }
}
