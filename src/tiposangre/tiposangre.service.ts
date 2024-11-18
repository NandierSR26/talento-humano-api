import { Injectable } from '@nestjs/common';
import { CreateTiposangreDto } from './dto/create-tiposangre.dto';
import { UpdateTiposangreDto } from './dto/update-tiposangre.dto';

@Injectable()
export class TiposangreService {
  create(createTiposangreDto: CreateTiposangreDto) {
    return 'This action adds a new tiposangre';
  }

  findAll() {
    return `This action returns all tiposangre`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposangre`;
  }

  update(id: number, updateTiposangreDto: UpdateTiposangreDto) {
    return `This action updates a #${id} tiposangre`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposangre`;
  }
}
