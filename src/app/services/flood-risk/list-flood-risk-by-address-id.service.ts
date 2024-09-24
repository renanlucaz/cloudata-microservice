import { FloodRiskRepository } from '@app/repositories/flood-risk-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListFloodRiskByAddressIdService {
  constructor(private floodRiskRepository: FloodRiskRepository) {}

  async execute(addressId: string) {
    const floodRiskList =
      await this.floodRiskRepository.listFloodRiskByAddressId(addressId);

    return floodRiskList;
  }
}
