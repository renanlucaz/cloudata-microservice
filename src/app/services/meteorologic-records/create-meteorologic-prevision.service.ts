import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';
import { HttpMeteorologicRecordMapper } from '@infra/database/prisma/mappers/http-meteorologic-previsions-mapper';
import { Injectable } from '@nestjs/common';

export abstract class MeteorologicRecordsExternalService {
  abstract createMeteorologicPrevisions(localeId: string): Promise<any>;
}

interface CreateMeteorologicPrevisionServiceRequest {
  localeId: string;
}

interface CreateMeteorologicPrevisionServiceResponse {
  meteorologicRecords: MeteorologicRecord[];
}

@Injectable()
export class CreateMeteorologicPrevisionService {
  constructor(
    private metereologicRecordsService: MeteorologicRecordsExternalService,
  ) {}

  async execute({
    localeId,
  }: CreateMeteorologicPrevisionServiceRequest): Promise<CreateMeteorologicPrevisionServiceResponse> {
    const meteorologicRecords =
      await this.metereologicRecordsService.createMeteorologicPrevisions(
        localeId,
      );

    return {
      meteorologicRecords: meteorologicRecords.map(
        HttpMeteorologicRecordMapper.toDomain,
      ),
    };
  }
}
