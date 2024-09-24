import { tb_risco_inundacoes as RawFloodRisk } from '@prisma/client';
import { FloodRisk } from '@app/entities/FloodRisk';

export class PrismaFloodRiskMapper {
  static toPrisma(floodRisk: FloodRisk) {
    return {
      id_risco: floodRisk.id,
      valor_risco: floodRisk.nivel,
      dt_risco: floodRisk.riskDate,
    };
  }

  static toDomain(raw: RawFloodRisk) {
    return new FloodRisk({
      id: raw.id_risco,
      nivel: raw.valor_risco,
      riskDate: raw.dt_risco,
    });
  }
}
