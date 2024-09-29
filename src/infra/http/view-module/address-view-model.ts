import { Address } from '@app/entities/Address';

export class AddressViewModel {
  static toHTTP(address: Address) {
    return {
      id: address.id,
      uf: address.uf,
      city: address.city,
      neightborhood: address.neightborhood,
      number: address.number,
      latitude: address.latitude,
      longitude: address.longitude,
      street: address.street,
      createdAt: address.createdAt,
      previsions: address.previsions,
    };
  }
}
