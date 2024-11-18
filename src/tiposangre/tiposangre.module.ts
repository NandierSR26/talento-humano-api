import { Module } from '@nestjs/common';
import { TiposangreService } from './tiposangre.service';
import { TiposangreController } from './tiposangre.controller';

@Module({
  controllers: [TiposangreController],
  providers: [TiposangreService],
})
export class TiposangreModule {}
