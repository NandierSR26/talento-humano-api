import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposPosesionesService } from './tipos_posesiones.service';
import { CreateTiposPosesioneDto } from './dto/create-tipos_posesione.dto';
import { UpdateTiposPosesioneDto } from './dto/update-tipos_posesione.dto';

@Controller('tipos-posesiones')
export class TiposPosesionesController {
  constructor(private readonly tiposPosesionesService: TiposPosesionesService) {}

  @Post()
  create(@Body() createTiposPosesioneDto: CreateTiposPosesioneDto) {
    return this.tiposPosesionesService.create(createTiposPosesioneDto);
  }

  @Get()
  findAll() {
    return this.tiposPosesionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposPosesionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposPosesioneDto: UpdateTiposPosesioneDto) {
    return this.tiposPosesionesService.update(+id, updateTiposPosesioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposPosesionesService.remove(+id);
  }
}
