import { Module } from '@nestjs/common';
import { TipoActoAdministrativoService } from './tipo_acto_administrativo.service';
import { TipoActoAdministrativoController } from './tipo_acto_administrativo.controller';

@Module({
  controllers: [TipoActoAdministrativoController],
  providers: [TipoActoAdministrativoService],
})
export class TipoActoAdministrativoModule {}
