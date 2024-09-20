import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AuthDTO {
  @IsNotEmpty()
  @Length(3, 210)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(3, 210)
  password: string;
}
