import { Address } from '@app/entities/Address';
import {
  tb_enderecos,
  tb_bairros,
  tb_estados,
  tb_logradouros,
  tb_municipios,
} from '@prisma/client';
import { randomUUID } from 'node:crypto';

interface RawCities extends tb_municipios {
  tb_estados: tb_estados;
}

interface RawNeightborhoods extends tb_bairros {
  tb_municipios: RawCities;
}

interface RawStreets extends tb_logradouros {
  tb_bairros: RawNeightborhoods;
}

interface RawAddress extends tb_enderecos {
  tb_logradouros: RawStreets;
  tb_registros_meteorologicos: any;
}

export class PrismaAddressMapper {
  static toPrisma(address: Address, userId: string) {
    return {
      id_endereco: address.id,
      latitude: address.latitude,
      longitude: address.longitude,
      dt_criacao: address.createdAt,
      numero: address.number,
      tb_logradouros: {
        create: {
          id_logradouro: randomUUID(),
          nm_logradouro: address.street,
          tb_bairros: {
            create: {
              id_bairro: randomUUID(),
              nm_bairro: address.neightborhood,
              tb_municipios: {
                create: {
                  id_municipio: randomUUID(),
                  nm_municipio: address.city,
                  tb_estados: {
                    create: {
                      id_uf: randomUUID(),
                      nm_estado: address.uf,
                    },
                  },
                },
              },
            },
          },
        },
      },
      tb_usuarios: {
        connect: { id_usuario: userId },
      },
    };
  }

  static toDomain(raw: RawAddress) {
    return {
      id: raw.id_endereco,
      number: raw.numero,
      latitude: raw.latitude,
      longitude: raw.longitude,
      street: raw.tb_logradouros.nm_logradouro,
      neightborhood: raw.tb_logradouros.tb_bairros.nm_bairro,
      city: raw.tb_logradouros.tb_bairros.tb_municipios.nm_municipio,
      uf: raw.tb_logradouros.tb_bairros.tb_municipios.tb_estados.nm_estado,
      createdAt: raw.dt_criacao,
      previsions: raw.tb_registros_meteorologicos,
    };
  }
}
