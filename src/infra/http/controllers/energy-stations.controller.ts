import { ListEnergyStationsService } from '@app/services/energy-stations/list-energy-stations.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { EnergyStationsViewModule } from '../view-module/energy-stations-view-model';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@app/guards/auth.guard';

@ApiTags('Energy Stations')
@UseGuards(AuthGuard)
@Controller('energy-stations')
export class EnergyStationsController {
  constructor(private listEnergyStations: ListEnergyStationsService) {}

  @Get('')
  async listAll() {
    const { energyStations } = await this.listEnergyStations.execute();

    return energyStations.map(EnergyStationsViewModule.toHTTP);
  }
}
