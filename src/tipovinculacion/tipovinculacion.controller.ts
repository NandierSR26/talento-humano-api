import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipovinculacionService } from './tipovinculacion.service';
import { CreateTipovinculacionDto } from './dto/create-tipovinculacion.dto';
import { UpdateTipovinculacionDto } from './dto/update-tipovinculacion.dto';

@Controller('tipovinculacion')
export class TipovinculacionController {
  constructor(private readonly tipovinculacionService: TipovinculacionService) {}

  @Post()
  create(@Body() createTipovinculacionDto: CreateTipovinculacionDto) {
    return this.tipovinculacionService.create(createTipovinculacionDto);
  }

  @Get()
  findAll() {
    return this.tipovinculacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipovinculacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipovinculacionDto: UpdateTipovinculacionDto) {
    return this.tipovinculacionService.update(+id, updateTipovinculacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipovinculacionService.remove(+id);
  }
}
