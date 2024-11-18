import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArpDto {
  @IsNotEmpty()
  @IsString()
  arp: string;
}
