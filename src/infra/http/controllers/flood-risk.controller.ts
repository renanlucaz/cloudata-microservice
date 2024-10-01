import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ListFloodRiskByAddressIdService } from '@app/services/flood-risk/list-flood-risk-by-address-id.service';
import { CreateFloodRiskService } from '@app/services/flood-risk/create-flood-risk.service';
import { FloodRiskViewModel } from '../view-module/flood-risk-view-model';

@ApiTags('FloodRisk')
@Controller('flood-risk')
export class FloodRiskController {
  constructor(
    private listFloodRiskByAddressIdService: ListFloodRiskByAddressIdService,
    private createFloodRisk: CreateFloodRiskService,
  ) {}

  @Get(':addressId')
  async getList(@Param('addressId') addressId: string) {
    const floodRiskList =
      await this.listFloodRiskByAddressIdService.execute(addressId);

    return floodRiskList.map(FloodRiskViewModel.toHTTP);
  }

  @Post('')
  async create(@Body() params: { addressId: string }) {
    const { addressId } = params;

    const { floodRisk } = await this.createFloodRisk.execute({ addressId });

    return FloodRiskViewModel.toHTTP(floodRisk);
  }
}
