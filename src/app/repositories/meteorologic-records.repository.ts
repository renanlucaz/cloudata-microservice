import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';

export abstract class MeteorologicRecordsRepository {
  abstract listMeteorologicRecordsByAddressId(
    endDate: Date,
    startDate: Date,
    addressId: string,
  ): Promise<MeteorologicRecord[]>;
  abstract saveMeteorologicPrevisions(
    meteorologicPrevisionList: MeteorologicRecord[],
    addressId: string,
  ): Promise<MeteorologicRecord[]>;
  abstract getMeteorologicRecordDetails(
    meteorologicRecordId: string,
  ): Promise<MeteorologicRecord>;
}
