import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PosesionesService } from './posesiones.service';
import { CreatePosesioneDto } from './dto/create-posesione.dto';
import { UpdatePosesioneDto } from './dto/update-posesione.dto';

@Controller('posesiones')
export class PosesionesController {
  constructor(private readonly posesionesService: PosesionesService) {}

  @Post()
  create(@Body() createPosesioneDto: CreatePosesioneDto) {
    return this.posesionesService.create(createPosesioneDto);
  }

  @Get()
  findAll() {
    return this.posesionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posesionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePosesioneDto: UpdatePosesioneDto) {
    return this.posesionesService.update(+id, updatePosesioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posesionesService.remove(+id);
  }
}
