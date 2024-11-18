import { Injectable } from '@nestjs/common';
import { CreateTipovinculacionDto } from './dto/create-tipovinculacion.dto';
import { UpdateTipovinculacionDto } from './dto/update-tipovinculacion.dto';

@Injectable()
export class TipovinculacionService {
  create(createTipovinculacionDto: CreateTipovinculacionDto) {
    return 'This action adds a new tipovinculacion';
  }

  findAll() {
    return `This action returns all tipovinculacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipovinculacion`;
  }

  update(id: number, updateTipovinculacionDto: UpdateTipovinculacionDto) {
    return `This action updates a #${id} tipovinculacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipovinculacion`;
  }
}
