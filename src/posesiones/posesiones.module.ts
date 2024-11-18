import { Module } from '@nestjs/common';
import { PosesionesService } from './posesiones.service';
import { PosesionesController } from './posesiones.controller';

@Module({
  controllers: [PosesionesController],
  providers: [PosesionesService],
})
export class PosesionesModule {}
