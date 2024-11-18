import { Injectable } from '@nestjs/common';
import { CreateNovedadnominaDto } from './dto/create-novedadnomina.dto';
import { UpdateNovedadnominaDto } from './dto/update-novedadnomina.dto';

@Injectable()
export class NovedadnominaService {
  create(createNovedadnominaDto: CreateNovedadnominaDto) {
    return 'This action adds a new novedadnomina';
  }

  findAll() {
    return `This action returns all novedadnomina`;
  }

  findOne(id: number) {
    return `This action returns a #${id} novedadnomina`;
  }

  update(id: number, updateNovedadnominaDto: UpdateNovedadnominaDto) {
    return `This action updates a #${id} novedadnomina`;
  }

  remove(id: number) {
    return `This action removes a #${id} novedadnomina`;
  }
}
