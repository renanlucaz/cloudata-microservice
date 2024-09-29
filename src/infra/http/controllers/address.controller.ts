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
import { GetAddressByCepService } from '@app/services/address/get-adderss-by-cep.service';
import { GetAddressLatlongService } from '@app/services/address/get-latlong-by-address.service';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(
    private listAddressByIdService: ListAddressByIdService,
    private createAddressService: CreateAddressService,
    private jwtService: JwtService,
    private getAddressByCEPService: GetAddressByCepService,
    private getLatlongByAddressService: GetAddressLatlongService,
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
  @Get()
  async listAddressById(@Headers() headers) {
    const jwtToken = headers.authorization.split(' ')[1];

    const userId = await this.jwtService.decode(jwtToken);

    const { addressList } = await this.listAddressByIdService.execute(userId);

    return addressList.map(AddressViewModel.toHTTP);
  }

  @Get(':cep')
  async getAddressByCEP(@Param() params: { cep: string }) {
    const { cep } = params;
    const address = await this.getAddressByCEPService.execute(cep);

    const { latlong } = await this.getLatlongByAddressService.execute(
      address.address,
    );

    return {
      ...address.address,
      latitude: latlong.lat,
      longitude: latlong.lng,
    };
  }
}
