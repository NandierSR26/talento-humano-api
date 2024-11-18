import { PartialType } from '@nestjs/mapped-types';
import { CreateCodigoDto } from './create-codigo.dto';

export class UpdateCodigoDto extends PartialType(CreateCodigoDto) {}
