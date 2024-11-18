import { Module } from '@nestjs/common';
import { TiposPosesionesService } from './tipos_posesiones.service';
import { TiposPosesionesController } from './tipos_posesiones.controller';

@Module({
  controllers: [TiposPosesionesController],
  providers: [TiposPosesionesService],
})
export class TiposPosesionesModule {}
