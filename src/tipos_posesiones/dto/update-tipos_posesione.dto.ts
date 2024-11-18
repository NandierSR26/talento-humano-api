import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposPosesioneDto } from './create-tipos_posesione.dto';

export class UpdateTiposPosesioneDto extends PartialType(CreateTiposPosesioneDto) {}
