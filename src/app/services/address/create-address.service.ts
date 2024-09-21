import { Address } from '@app/entities/Address';
import { AddressRepository } from '@app/repositories/address-repository';
import { Injectable } from '@nestjs/common';

interface CreateAddressRequest {
  id: string;
  uf: string;
  city: string;
  neightborhood: string;
  number: string;
  latitude: number;
  longitude: number;
  street: string;
  createdAt: Date;
  userId: string;
}

interface CreateAddressResponse {
  address: Address;
}

@Injectable()
export class CreateAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async execute(request: CreateAddressRequest): Promise<CreateAddressResponse> {
    const {
      city,
      createdAt,
      id,
      latitude,
      longitude,
      neightborhood,
      number,
      street,
      uf,
      userId,
    } = request;

    const address = new Address({
      city,
      createdAt,
      id,
      latitude,
      longitude,
      neightborhood,
      number,
      street,
      uf,
    });

    this.addressRepository.createNewAddress(address, userId);

    return { address };
  }
}
