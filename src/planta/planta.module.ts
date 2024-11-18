import { Module } from '@nestjs/common';
import { PlantaService } from './planta.service';
import { PlantaController } from './planta.controller';

@Module({
  controllers: [PlantaController],
  providers: [PlantaService],
})
export class PlantaModule {}
