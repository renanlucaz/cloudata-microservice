import { tb_usuarios as RawUser } from '@prisma/client';
import { User } from '@app/entities/User';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id_usuario: user.id,
      nm_usuario: user.name,
      email: user.email,
      senha: user.password,
    };
  }

  static toDomain(raw: RawUser) {
    return new User({
      name: raw.nm_usuario,
      password: raw.senha,
      email: raw.email,
    });
  }
}
