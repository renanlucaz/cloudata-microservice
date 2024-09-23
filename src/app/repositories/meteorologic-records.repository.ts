import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';

export abstract class MeteorologicRecordsRepository {
  abstract listMeteorologicRecordsByDate(
    endDate: Date,
    startDate: Date,
  ): Promise<MeteorologicRecord[]>;
  abstract saveMeteorologicPrevisions(
    meteorologicPrevisionList: MeteorologicRecord[],
    addressId: string,
  ): Promise<MeteorologicRecord[]>;
}
