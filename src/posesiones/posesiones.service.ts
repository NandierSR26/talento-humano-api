import { Injectable } from '@nestjs/common';
import { CreatePosesioneDto } from './dto/create-posesione.dto';
import { UpdatePosesioneDto } from './dto/update-posesione.dto';

@Injectable()
export class PosesionesService {
  create(createPosesioneDto: CreatePosesioneDto) {
    return 'This action adds a new posesione';
  }

  findAll() {
    return `This action returns all posesiones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} posesione`;
  }

  update(id: number, updatePosesioneDto: UpdatePosesioneDto) {
    return `This action updates a #${id} posesione`;
  }

  remove(id: number) {
    return `This action removes a #${id} posesione`;
  }
}
