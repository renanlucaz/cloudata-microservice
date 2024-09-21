import { Address } from '@app/entities/Address';
import { AddressRepository } from '@app/repositories/address-repository';
import { Injectable } from '@nestjs/common';

interface ListAddressByIdResponse {
  addressList: Address[];
}

@Injectable()
export class ListAddressByIdService {
  constructor(private addressRepository: AddressRepository) {}

  async execute(id: string): Promise<ListAddressByIdResponse> {
    const addressList = await this.addressRepository.listAddressById(id);

    return { addressList };
  }
}
