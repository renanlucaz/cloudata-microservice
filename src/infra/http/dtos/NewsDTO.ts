import { IsNotEmpty, Length } from 'class-validator';

export class NewsDTO {
  @IsNotEmpty()
  @Length(3, 210)
  search: string;
}
