import { Address } from '@app/entities/Address';

export abstract class AddressRepository {
  abstract createNewAddress(address: Address, userId: string): Promise<void>;
  abstract listAddressById(id: string): Promise<Address[]>;
}
