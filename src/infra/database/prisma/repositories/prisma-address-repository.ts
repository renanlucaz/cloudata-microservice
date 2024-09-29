import { AddressRepository } from '@app/repositories/address-repository';
import { PrismaService } from '../prisma.service';
import { Address } from '@app/entities/Address';
import { PrismaAddressMapper } from '../mappers/prisma-address-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private prismaService: PrismaService) {}

  async createNewAddress(address: Address, userId: string): Promise<void> {
    const prismaAdderssData = PrismaAddressMapper.toPrisma(address, userId);

    await this.prismaService.tb_enderecos.create({
      data: prismaAdderssData,
    });
  }

  async listAddressById(id: string): Promise<any[]> {
    const address = await this.prismaService.tb_enderecos.findMany({
      where: { tb_usuarios_id_usuario: id },
      include: {
        tb_registros_meteorologicos: {
          select: {
            prb_chuva: true,
          },
        },
        tb_logradouros: {
          include: {
            tb_bairros: {
              include: {
                tb_municipios: {
                  include: {
                    tb_estados: {
                      select: {
                        nm_estado: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return address.map(PrismaAddressMapper.toDomain);
  }
}
