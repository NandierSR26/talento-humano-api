import { PartialType } from '@nestjs/mapped-types';
import { CreateNovedadnominaDto } from './create-novedadnomina.dto';

export class UpdateNovedadnominaDto extends PartialType(CreateNovedadnominaDto) {}
