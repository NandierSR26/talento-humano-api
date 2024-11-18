import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposangreService } from './tiposangre.service';
import { CreateTiposangreDto } from './dto/create-tiposangre.dto';
import { UpdateTiposangreDto } from './dto/update-tiposangre.dto';

@Controller('tiposangre')
export class TiposangreController {
  constructor(private readonly tiposangreService: TiposangreService) {}

  @Post()
  create(@Body() createTiposangreDto: CreateTiposangreDto) {
    return this.tiposangreService.create(createTiposangreDto);
  }

  @Get()
  findAll() {
    return this.tiposangreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposangreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposangreDto: UpdateTiposangreDto) {
    return this.tiposangreService.update(+id, updateTiposangreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposangreService.remove(+id);
  }
}
