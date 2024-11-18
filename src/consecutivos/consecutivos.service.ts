import { Injectable } from '@nestjs/common';
import { CreateConsecutivoDto } from './dto/create-consecutivo.dto';
import { UpdateConsecutivoDto } from './dto/update-consecutivo.dto';

@Injectable()
export class ConsecutivosService {
  create(createConsecutivoDto: CreateConsecutivoDto) {
    return 'This action adds a new consecutivo';
  }

  findAll() {
    return `This action returns all consecutivos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consecutivo`;
  }

  update(id: number, updateConsecutivoDto: UpdateConsecutivoDto) {
    return `This action updates a #${id} consecutivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} consecutivo`;
  }
}
