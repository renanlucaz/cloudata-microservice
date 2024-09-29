import { Injectable } from '@nestjs/common';

export abstract class AddressExternalService {
  abstract getAddressByCEP(cep: string): Promise<any>;
}

@Injectable()
export class GetAddressByCepService {
  constructor(private addressExternalService: AddressExternalService) {}

  async execute(cep: string): Promise<any> {
    const address = await this.addressExternalService.getAddressByCEP(cep);

    return { address };
  }
}
