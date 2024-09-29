import { AddressLatlongExternalService } from '@app/services/address/get-latlong-by-address.service';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { map } from 'rxjs';

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

@Injectable()
export class AddressLatlongClient implements AddressLatlongExternalService {
  constructor(private httpService: HttpService) {}
  async getLatlongByAddress(address: Address) {
    const parsedAddress = [
      address.logradouro, // Pode estar vazio
      address.bairro, // Pode estar vazio
      address.localidade,
      address.uf,
      address.estado,
      address.cep,
    ]
      .filter((campo) => campo && campo.trim().length > 0) // Remove campos vazios
      .join(', '); // Junta os campos com ", "

    const data = await this.httpService
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(parsedAddress)}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
      )
      .pipe(map((response) => response.data))
      .toPromise();

    if (data.results && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new HttpException('Address not found', 403);
    }
  }
}
