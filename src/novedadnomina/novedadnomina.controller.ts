import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NovedadnominaService } from './novedadnomina.service';
import { CreateNovedadnominaDto } from './dto/create-novedadnomina.dto';
import { UpdateNovedadnominaDto } from './dto/update-novedadnomina.dto';

@Controller('novedadnomina')
export class NovedadnominaController {
  constructor(private readonly novedadnominaService: NovedadnominaService) {}

  @Post()
  create(@Body() createNovedadnominaDto: CreateNovedadnominaDto) {
    return this.novedadnominaService.create(createNovedadnominaDto);
  }

  @Get()
  findAll() {
    return this.novedadnominaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novedadnominaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovedadnominaDto: UpdateNovedadnominaDto) {
    return this.novedadnominaService.update(+id, updateNovedadnominaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novedadnominaService.remove(+id);
  }
}
