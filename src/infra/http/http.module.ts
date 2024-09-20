import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ListUsersService } from '@app/services/user/list-users.service';
import { UsersController } from './controllers/users.controller';

import { CreateUserService } from '@app/services/user/create-user.service';
import { FindUserService } from '@app/services/user/find-user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [ListUsersService, CreateUserService, FindUserService],
})
export class HttpModule {}
