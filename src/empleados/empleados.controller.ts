import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { createEmpleadoDto } from './dto/createEmpleadoDto';
import { FilterUsersDto } from './dto/buscarEmpleadoDto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private empleadoService: EmpleadosService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  registroEmpleado(@Body() usuario: createEmpleadoDto) {
    return this.empleadoService.createUsuario(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.empleadoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('buscar')
  find(@Query() filterDto: FilterUsersDto) {
    return this.empleadoService.filterUsers(filterDto);
  }
}
