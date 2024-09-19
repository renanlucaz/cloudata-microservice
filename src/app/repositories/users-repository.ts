import { User } from '@app/entities/User';

export abstract class UsersRepository {
  abstract getUserList(): Promise<User[]>;
  abstract createNewUser(user: User): Promise<void>;
}
