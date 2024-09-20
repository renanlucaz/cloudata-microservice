import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ListUsersService } from '@app/services/user/list-users.service';
import { UsersController } from './controllers/users.controller';

import { CreateUserService } from '@app/services/user/create-user.service';
import { FindUserService } from '@app/services/user/find-user.service';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from '@app/services/auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [UsersController, AuthController],
  providers: [
    ListUsersService,
    CreateUserService,
    FindUserService,
    AuthService,
    JwtService,
  ],
})
export class HttpModule {}
