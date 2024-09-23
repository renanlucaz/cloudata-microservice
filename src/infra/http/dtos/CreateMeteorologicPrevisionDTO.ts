import { IsNotEmpty, Length } from 'class-validator';

export class CreateMetereologicPrevisionDTO {
  @IsNotEmpty()
  @Length(3, 210)
  localeId: string;
}
