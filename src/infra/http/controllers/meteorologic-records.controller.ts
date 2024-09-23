import { ListMeteorologicRecordsService } from '@app/services/meteorologic-records/list-meteorologic-records.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MeteorologicRecordsViewModule } from '../view-module/meteorologic-records-view-model';
import { CreateMeteorologicPrevisionService } from '@app/services/meteorologic-records/create-meteorologic-prevision.service';
import { SaveMeteorologicPrevisionsService } from '@app/services/meteorologic-records/save-meteorologic-prevision.service';
import { CreateMetereologicPrevisionDTO } from '../dtos/CreateMeteorologicPrevisionDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Meteorologic Records')
@Controller('meteorologic-records')
export class MeteorologicRecordsControler {
  constructor(
    private listMeteorologicRecords: ListMeteorologicRecordsService,
    private createMeteorologicPrevisions: CreateMeteorologicPrevisionService,
    private saveMeteorologicPrevisions: SaveMeteorologicPrevisionsService,
  ) {}

  @Post('prevision')
  async createPrevision(@Body() body: CreateMetereologicPrevisionDTO) {
    const { localeId } = body;

    const { meteorologicRecords } =
      await this.createMeteorologicPrevisions.execute({ localeId });

    meteorologicRecords.map(MeteorologicRecordsViewModule.toHTTP);

    await this.saveMeteorologicPrevisions.execute({
      meteorologicPrevisions: meteorologicRecords,
      localeId,
    });

    return { meteorologicRecords };
  }

  @Get()
  async listByDate(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    const { meteorologicRecords } = await this.listMeteorologicRecords.execute({
      startDate,
      endDate,
    });

    return {
      meteorologicRecords: meteorologicRecords.map(
        MeteorologicRecordsViewModule.toHTTP,
      ),
    };
  }
}
