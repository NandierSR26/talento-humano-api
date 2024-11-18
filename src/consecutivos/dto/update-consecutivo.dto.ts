import { PartialType } from '@nestjs/mapped-types';
import { CreateConsecutivoDto } from './create-consecutivo.dto';

export class UpdateConsecutivoDto extends PartialType(CreateConsecutivoDto) {}
