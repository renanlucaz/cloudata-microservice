import { FloodRisk } from '@app/entities/FloodRisk';

export abstract class FloodRiskRepository {
  abstract listFloodRiskByAddressId(addressId: string): Promise<FloodRisk[]>;
  abstract createFloodRisk(addressId: string): Promise<FloodRisk>;
}
