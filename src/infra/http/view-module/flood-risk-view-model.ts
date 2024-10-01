import { FloodRisk } from '@app/entities/FloodRisk';

export class FloodRiskViewModel {
  static toHTTP(floodRisk: FloodRisk) {
    return {
      id: floodRisk.id,
      level: floodRisk.nivel,
      date: floodRisk.riskDate,
    };
  }
}
