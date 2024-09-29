import { Injectable } from '@nestjs/common';

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
}

export abstract class AddressLatlongExternalService {
  abstract getLatlongByAddress(address: Address): Promise<any>;
}

@Injectable()
export class GetAddressLatlongService {
  constructor(private addressExternalService: AddressLatlongExternalService) {}

  async execute(address: Address): Promise<any> {
    const latlong =
      await this.addressExternalService.getLatlongByAddress(address);

    return { latlong };
  }
}
