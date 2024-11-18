import { Module } from '@nestjs/common';
import { SituacionadministrativaService } from './situacionadministrativa.service';
import { SituacionadministrativaController } from './situacionadministrativa.controller';

@Module({
  controllers: [SituacionadministrativaController],
  providers: [SituacionadministrativaService],
})
export class SituacionadministrativaModule {}
