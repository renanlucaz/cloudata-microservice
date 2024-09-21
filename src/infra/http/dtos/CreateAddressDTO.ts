import { IsNotEmpty, Length } from 'class-validator';

export class CreateAddressDTO {
  @IsNotEmpty()
  @Length(3, 210)
  uf: string;

  @IsNotEmpty()
  @Length(3, 210)
  city: string;

  @IsNotEmpty()
  @Length(3, 210)
  neightborhood: string;

  @IsNotEmpty()
  @Length(3, 210)
  number: string;

  @IsNotEmpty()
  @Length(3, 210)
  latitude: number;

  @IsNotEmpty()
  @Length(3, 210)
  longitude: number;

  @IsNotEmpty()
  @Length(3, 210)
  street: string;
}
