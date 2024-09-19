import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GetAllUsers } from '@app/use-cases/user/get-all-users';
import { UsersController } from './controllers/users.controller';
import { CreateNewUser } from '@app/use-cases/user/create-new-user';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [GetAllUsers, CreateNewUser],
})
export class HttpModule {}
