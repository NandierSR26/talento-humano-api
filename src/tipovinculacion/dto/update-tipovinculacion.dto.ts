import { PartialType } from '@nestjs/mapped-types';
import { CreateTipovinculacionDto } from './create-tipovinculacion.dto';

export class UpdateTipovinculacionDto extends PartialType(CreateTipovinculacionDto) {}
