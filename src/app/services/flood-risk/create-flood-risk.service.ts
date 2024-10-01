import { FloodRisk } from '@app/entities/FloodRisk';
import { FloodRiskRepository } from '@app/repositories/flood-risk-repository';
import { Injectable } from '@nestjs/common';

interface CreateFloodRiskServiceResponse {
  floodRisk: FloodRisk;
}

interface CreateFloodRiskServiceRequest {
  addressId: string;
}

@Injectable()
export class CreateFloodRiskService {
  constructor(private floodRiskRepository: FloodRiskRepository) {}

  async execute(
    request: CreateFloodRiskServiceRequest,
  ): Promise<CreateFloodRiskServiceResponse> {
    const { addressId } = request;

    const floodRisk = await this.floodRiskRepository.createFloodRisk(addressId);

    return { floodRisk };
  }
}
