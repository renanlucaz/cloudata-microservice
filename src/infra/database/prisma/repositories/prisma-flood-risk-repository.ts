import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { FloodRiskRepository } from '@app/repositories/flood-risk-repository';
import { FloodRisk } from '@app/entities/FloodRisk';
import { PrismaFloodRiskMapper } from '../mappers/prisma-flood-risk-mapper';

@Injectable()
export class PrismaFloodRiskRepository implements FloodRiskRepository {
  constructor(private prismaService: PrismaService) {}

  async listFloodRiskByAddressId(addressId: string): Promise<FloodRisk[]> {
    const floodRiskList = await this.prismaService.tb_risco_inundacoes.findMany(
      {
        where: {
          tb_enderecos_id_endereco: addressId,
        },
      },
    );

    return floodRiskList.map(PrismaFloodRiskMapper.toDomain);
  }
}
