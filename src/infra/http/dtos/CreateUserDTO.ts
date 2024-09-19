import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @Length(3, 210)
  name: string;

  @IsNotEmpty()
  @Length(3, 210)
  email: string;

  @IsNotEmpty()
  @Length(3, 210)
  password: string;
}
