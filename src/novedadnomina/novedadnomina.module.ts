import { Module } from '@nestjs/common';
import { NovedadnominaService } from './novedadnomina.service';
import { NovedadnominaController } from './novedadnomina.controller';

@Module({
  controllers: [NovedadnominaController],
  providers: [NovedadnominaService],
})
export class NovedadnominaModule {}
