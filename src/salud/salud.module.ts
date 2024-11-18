import { Module } from '@nestjs/common';
import { SaludService } from './salud.service';
import { SaludController } from './salud.controller';

@Module({
  controllers: [SaludController],
  providers: [SaludService],
})
export class SaludModule {}
