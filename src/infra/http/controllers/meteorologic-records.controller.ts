import { ListMeteorologicRecordsService } from '@app/services/meteorologic-records/list-meteorologic-records.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MeteorologicRecordsViewModule } from '../view-module/meteorologic-records-view-model';
import { CreateMeteorologicPrevisionService } from '@app/services/meteorologic-records/create-meteorologic-prevision.service';
import { SaveMeteorologicPrevisionsService } from '@app/services/meteorologic-records/save-meteorologic-prevision.service';
import { CreateMetereologicPrevisionDTO } from '../dtos/CreateMeteorologicPrevisionDTO';
import { ApiTags } from '@nestjs/swagger';
import { GetMeteorologicRecordDetailsService } from '@app/services/meteorologic-records/get-meteorologic-record-details.service';

@ApiTags('Meteorologic Records')
@Controller('meteorologic-records')
export class MeteorologicRecordsControler {
  constructor(
    private listMeteorologicRecords: ListMeteorologicRecordsService,
    private createMeteorologicPrevisions: CreateMeteorologicPrevisionService,
    private saveMeteorologicPrevisions: SaveMeteorologicPrevisionsService,
    private getMeteorologicRecordDetails: GetMeteorologicRecordDetailsService,
  ) {}

  @Post('prevision')
  async createPrevision(@Body() body: CreateMetereologicPrevisionDTO) {
    const { localeId } = body;

    const { meteorologicRecords } =
      await this.createMeteorologicPrevisions.execute({ localeId: '3477' });

    meteorologicRecords.map(MeteorologicRecordsViewModule.toHTTP);

    await this.saveMeteorologicPrevisions.execute({
      meteorologicPrevisions: meteorologicRecords,
      localeId,
    });

    return { meteorologicRecords };
  }

  @Get(':addressId')
  async listByDate(
    @Param('addressId') addressId: string,
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    const { meteorologicRecords } = await this.listMeteorologicRecords.execute({
      startDate,
      endDate,
      addressId,
    });

    return {
      meteorologicRecords: meteorologicRecords.map(
        MeteorologicRecordsViewModule.toHTTP,
      ),
    };
  }

  @Get('/details/:meteorologicRecordId')
  async getDetails(
    @Param('meteorologicRecordId') meteorologicRecordId: string,
  ) {
    const meteorologicRecordDetails =
      await this.getMeteorologicRecordDetails.execute(meteorologicRecordId);

    return MeteorologicRecordsViewModule.toHTTP(meteorologicRecordDetails);
  }
}
