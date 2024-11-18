import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OficinaadscritaService } from './oficinaadscrita.service';
import { CreateOficinaadscritaDto } from './dto/create-oficinaadscrita.dto';
import { UpdateOficinaadscritaDto } from './dto/update-oficinaadscrita.dto';

@Controller('oficinaadscrita')
export class OficinaadscritaController {
  constructor(private readonly oficinaadscritaService: OficinaadscritaService) {}

  @Post()
  create(@Body() createOficinaadscritaDto: CreateOficinaadscritaDto) {
    return this.oficinaadscritaService.create(createOficinaadscritaDto);
  }

  @Get()
  findAll() {
    return this.oficinaadscritaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oficinaadscritaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOficinaadscritaDto: UpdateOficinaadscritaDto) {
    return this.oficinaadscritaService.update(+id, updateOficinaadscritaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oficinaadscritaService.remove(+id);
  }
}
