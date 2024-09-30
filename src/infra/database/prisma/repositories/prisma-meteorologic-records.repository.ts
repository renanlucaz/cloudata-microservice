import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MeteorologicRecordsRepository } from '@app/repositories/meteorologic-records.repository';
import { PrismaMeteorologicRecordsMapper } from '../mappers/prisma-meteorologic-records-mapper';
import { MeteorologicRecord } from '@app/entities/MeteorologicRecords';

@Injectable()
export class PrismaMeteorologicRecordsRepository
  implements MeteorologicRecordsRepository
{
  constructor(private prismaService: PrismaService) {}

  async getMeteorologicRecordDetails(
    meteorologicRecordId: string,
  ): Promise<any> {
    const meteorologicRecord =
      await this.prismaService.tb_registros_meteorologicos.findFirst({
        where: { id_registro: meteorologicRecordId },
        include: { tb_enderecos: true },
      });

    return PrismaMeteorologicRecordsMapper.toDomain(meteorologicRecord);
  }

  async saveMeteorologicPrevisions(
    meteorologicPrevisionList: MeteorologicRecord[],
    addressId: string,
  ): Promise<any[]> {
    const prismaMeteorologicPrevisionList = meteorologicPrevisionList.map(
      (meteorologicPrevision) =>
        PrismaMeteorologicRecordsMapper.toPrisma(
          meteorologicPrevision,
          addressId,
        ),
    );

    const meteorologicPrevisions =
      await this.prismaService.tb_registros_meteorologicos.createManyAndReturn({
        data: prismaMeteorologicPrevisionList,
      });

    return meteorologicPrevisions.map(PrismaMeteorologicRecordsMapper.toDomain);
  }

  async listMeteorologicRecordsByAddressId(
    startDate: Date,
    endDate: Date,
    addressId: string,
  ): Promise<any> {
    const meteorologicRecords =
      await this.prismaService.tb_registros_meteorologicos.findMany({
        where: {
          tb_enderecos_id_endereco: addressId,
        },
        orderBy: {
          prb_chuva: 'desc',
        },
      });

    return meteorologicRecords.map(PrismaMeteorologicRecordsMapper.toDomain);
  }
}
