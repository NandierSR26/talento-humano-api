import { Module } from '@nestjs/common';
import { ConsecutivosService } from './consecutivos.service';
import { ConsecutivosController } from './consecutivos.controller';

@Module({
  controllers: [ConsecutivosController],
  providers: [ConsecutivosService],
})
export class ConsecutivosModule {}
