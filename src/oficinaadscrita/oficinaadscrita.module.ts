import { Module } from '@nestjs/common';
import { OficinaadscritaService } from './oficinaadscrita.service';
import { OficinaadscritaController } from './oficinaadscrita.controller';

@Module({
  controllers: [OficinaadscritaController],
  providers: [OficinaadscritaService],
})
export class OficinaadscritaModule {}
