import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposangreDto } from './create-tiposangre.dto';

export class UpdateTiposangreDto extends PartialType(CreateTiposangreDto) {}
