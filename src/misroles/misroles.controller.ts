import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MisrolesService } from './misroles.service';
import { CreateMisroleDto } from './dto/create-misrole.dto';
import { UpdateMisroleDto } from './dto/update-misrole.dto';

@Controller('misroles')
export class MisrolesController {
  constructor(private readonly misrolesService: MisrolesService) {}

  @Post()
  create(@Body() createMisroleDto: CreateMisroleDto) {
    return this.misrolesService.create(createMisroleDto);
  }

  @Get()
  findAll() {
    return this.misrolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.misrolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMisroleDto: UpdateMisroleDto) {
    return this.misrolesService.update(+id, updateMisroleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.misrolesService.remove(+id);
  }
}
