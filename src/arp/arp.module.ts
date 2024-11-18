import { Module } from '@nestjs/common';
import { ArpService } from './arp.service';
import { ArpController } from './arp.controller';

@Module({
  controllers: [ArpController],
  providers: [ArpService],
})
export class ArpModule {}
