import { Module } from '@nestjs/common';
import { TipovinculacionService } from './tipovinculacion.service';
import { TipovinculacionController } from './tipovinculacion.controller';

@Module({
  controllers: [TipovinculacionController],
  providers: [TipovinculacionService],
})
export class TipovinculacionModule {}
