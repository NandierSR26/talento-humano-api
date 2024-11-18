import { Module } from '@nestjs/common';
import { ArpService } from './arp.service';
import { ArpController } from './arp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arp } from './entities/arp.entity';

@Module({
  controllers: [ArpController],
  providers: [ArpService],
  imports: [TypeOrmModule.forFeature([Arp])],
  exports: [TypeOrmModule],
})
export class ArpModule {}
