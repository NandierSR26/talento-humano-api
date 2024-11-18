import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsecutivosService } from './consecutivos.service';
import { CreateConsecutivoDto } from './dto/create-consecutivo.dto';
import { UpdateConsecutivoDto } from './dto/update-consecutivo.dto';

@Controller('consecutivos')
export class ConsecutivosController {
  constructor(private readonly consecutivosService: ConsecutivosService) {}

  @Post()
  create(@Body() createConsecutivoDto: CreateConsecutivoDto) {
    return this.consecutivosService.create(createConsecutivoDto);
  }

  @Get()
  findAll() {
    return this.consecutivosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consecutivosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsecutivoDto: UpdateConsecutivoDto) {
    return this.consecutivosService.update(+id, updateConsecutivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consecutivosService.remove(+id);
  }
}
