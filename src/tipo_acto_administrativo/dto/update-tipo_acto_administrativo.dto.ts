import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoActoAdministrativoDto } from './create-tipo_acto_administrativo.dto';

export class UpdateTipoActoAdministrativoDto extends PartialType(CreateTipoActoAdministrativoDto) {}
