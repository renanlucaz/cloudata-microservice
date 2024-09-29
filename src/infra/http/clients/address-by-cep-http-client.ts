import { AddressExternalService } from '@app/services/address/get-adderss-by-cep.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AddressByCEPClient implements AddressExternalService {
  constructor(private httpService: HttpService) {}
  async getAddressByCEP(cep: string) {
    const response = await this.httpService
      .get(`https://viacep.com.br/ws/${cep}/json`)
      .pipe(map((response) => response.data))
      .toPromise();

    return response;
  }
}
