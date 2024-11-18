import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SituacionadministrativaService } from './situacionadministrativa.service';
import { CreateSituacionadministrativaDto } from './dto/create-situacionadministrativa.dto';
import { UpdateSituacionadministrativaDto } from './dto/update-situacionadministrativa.dto';

@Controller('situacionadministrativa')
export class SituacionadministrativaController {
  constructor(private readonly situacionadministrativaService: SituacionadministrativaService) {}

  @Post()
  create(@Body() createSituacionadministrativaDto: CreateSituacionadministrativaDto) {
    return this.situacionadministrativaService.create(createSituacionadministrativaDto);
  }

  @Get()
  findAll() {
    return this.situacionadministrativaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.situacionadministrativaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSituacionadministrativaDto: UpdateSituacionadministrativaDto) {
    return this.situacionadministrativaService.update(+id, updateSituacionadministrativaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.situacionadministrativaService.remove(+id);
  }
}
