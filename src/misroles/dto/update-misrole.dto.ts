import { PartialType } from '@nestjs/mapped-types';
import { CreateMisroleDto } from './create-misrole.dto';

export class UpdateMisroleDto extends PartialType(CreateMisroleDto) {}
