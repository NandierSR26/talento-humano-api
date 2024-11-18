import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoActoAdministrativoService } from './tipo_acto_administrativo.service';
import { CreateTipoActoAdministrativoDto } from './dto/create-tipo_acto_administrativo.dto';
import { UpdateTipoActoAdministrativoDto } from './dto/update-tipo_acto_administrativo.dto';

@Controller('tipo-acto-administrativo')
export class TipoActoAdministrativoController {
  constructor(private readonly tipoActoAdministrativoService: TipoActoAdministrativoService) {}

  @Post()
  create(@Body() createTipoActoAdministrativoDto: CreateTipoActoAdministrativoDto) {
    return this.tipoActoAdministrativoService.create(createTipoActoAdministrativoDto);
  }

  @Get()
  findAll() {
    return this.tipoActoAdministrativoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoActoAdministrativoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoActoAdministrativoDto: UpdateTipoActoAdministrativoDto) {
    return this.tipoActoAdministrativoService.update(+id, updateTipoActoAdministrativoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoActoAdministrativoService.remove(+id);
  }
}
