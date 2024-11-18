import { Module } from '@nestjs/common';
import { MisrolesService } from './misroles.service';
import { MisrolesController } from './misroles.controller';

@Module({
  controllers: [MisrolesController],
  providers: [MisrolesService],
})
export class MisrolesModule {}
