import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaludService } from './salud.service';
import { CreateSaludDto } from './dto/create-salud.dto';
import { UpdateSaludDto } from './dto/update-salud.dto';

@Controller('salud')
export class SaludController {
  constructor(private readonly saludService: SaludService) {}

  @Post()
  create(@Body() createSaludDto: CreateSaludDto) {
    return this.saludService.create(createSaludDto);
  }

  @Get()
  findAll() {
    return this.saludService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saludService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaludDto: UpdateSaludDto) {
    return this.saludService.update(+id, updateSaludDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saludService.remove(+id);
  }
}
