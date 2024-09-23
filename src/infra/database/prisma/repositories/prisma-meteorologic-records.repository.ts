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

  async listMeteorologicRecordsByDate(
    startDate: Date,
    endDate: Date,
  ): Promise<any> {
    const meteorologicRecords =
      await this.prismaService.tb_registros_meteorologicos.findMany({
        where: {
          dt_registro: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
        include: {
          tb_enderecos: {
            include: {
              tb_logradouros: {
                select: {
                  nm_logradouro: true,
                },
              },
            },
          },
        },
      });

    return meteorologicRecords.map(PrismaMeteorologicRecordsMapper.toDomain);
  }
}
