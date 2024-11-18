import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ArpService } from './arp.service';
import { CreateArpDto } from './dto/create-arp.dto';

@Controller('arp')
export class ArpController {
  constructor(private readonly arpService: ArpService) {}

  @Post()
  create(@Body() createArpDto: CreateArpDto) {
    return this.arpService.create(createArpDto);
  }

  @Get()
  findAll() {
    return this.arpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arpService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arpService.remove(+id);
  }
}
