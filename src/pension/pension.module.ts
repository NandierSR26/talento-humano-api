import { Module } from '@nestjs/common';
import { PensionService } from './pension.service';
import { PensionController } from './pension.controller';

@Module({
  controllers: [PensionController],
  providers: [PensionService],
})
export class PensionModule {}
