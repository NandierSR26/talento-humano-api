import { Injectable } from '@nestjs/common';
import { CreateTiposPosesioneDto } from './dto/create-tipos_posesione.dto';
import { UpdateTiposPosesioneDto } from './dto/update-tipos_posesione.dto';

@Injectable()
export class TiposPosesionesService {
  create(createTiposPosesioneDto: CreateTiposPosesioneDto) {
    return 'This action adds a new tiposPosesione';
  }

  findAll() {
    return `This action returns all tiposPosesiones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposPosesione`;
  }

  update(id: number, updateTiposPosesioneDto: UpdateTiposPosesioneDto) {
    return `This action updates a #${id} tiposPosesione`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposPosesione`;
  }
}
