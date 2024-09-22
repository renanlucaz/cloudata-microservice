import { ListAddressByIdService } from '@app/services/address/list-address-by-id.service';
import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AddressViewModel } from '../view-module/address-view-model';
import { CreateAddressDTO } from '../dtos/CreateAddressDTO';
import { AuthGuard } from '@app/guards/auth.guard';
import { CreateAddressService } from '@app/services/address/create-address.service';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(
    private listAddressByIdService: ListAddressByIdService,
    private createAddressService: CreateAddressService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async createAddress(@Body() body: CreateAddressDTO, @Headers() headers) {
    const { city, latitude, longitude, uf, neightborhood, number, street } =
      body;

    const jwtToken = headers.authorization.split(' ')[1];

    const userId = await this.jwtService.decode(jwtToken);

    const { address } = await this.createAddressService.execute({
      id: randomUUID(),
      city,
      uf,
      latitude,
      longitude,
      neightborhood,
      number,
      street,
      userId,
      createdAt: new Date(),
    });

    return AddressViewModel.toHTTP(address);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async listAddressById(@Param('id') id: string) {
    const { addressList } = await this.listAddressByIdService.execute(id);

    return addressList.map(AddressViewModel.toHTTP);
  }
}
