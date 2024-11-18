import { PartialType } from '@nestjs/mapped-types';
import { CreatePosesioneDto } from './create-posesione.dto';

export class UpdatePosesioneDto extends PartialType(CreatePosesioneDto) {}
