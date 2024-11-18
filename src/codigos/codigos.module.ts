import { Module } from '@nestjs/common';
import { CodigosService } from './codigos.service';
import { CodigosController } from './codigos.controller';

@Module({
  controllers: [CodigosController],
  providers: [CodigosService],
})
export class CodigosModule {}
