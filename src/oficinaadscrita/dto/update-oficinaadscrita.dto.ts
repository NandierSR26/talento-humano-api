import { PartialType } from '@nestjs/mapped-types';
import { CreateOficinaadscritaDto } from './create-oficinaadscrita.dto';

export class UpdateOficinaadscritaDto extends PartialType(CreateOficinaadscritaDto) {}
