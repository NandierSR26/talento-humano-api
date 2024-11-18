import { PartialType } from '@nestjs/mapped-types';
import { CreateSituacionadministrativaDto } from './create-situacionadministrativa.dto';

export class UpdateSituacionadministrativaDto extends PartialType(CreateSituacionadministrativaDto) {}
