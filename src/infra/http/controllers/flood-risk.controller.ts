import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ListFloodRiskByAddressIdService } from '@app/services/flood-risk/list-flood-risk-by-address-id.service';

@ApiTags('FloodRisk')
@Controller('flood-risk')
export class FloodRiskController {
  constructor(
    private listFloodRiskByAddressIdService: ListFloodRiskByAddressIdService,
  ) {}

  @Get(':addressId')
  async getList(@Param('addressId') addressId: string) {
    const floodRiskList =
      await this.listFloodRiskByAddressIdService.execute(addressId);

    return { floodRiskList };
  }
}
