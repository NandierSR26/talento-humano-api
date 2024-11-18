import { Injectable } from '@nestjs/common';
import { CreateSaludDto } from './dto/create-salud.dto';
import { UpdateSaludDto } from './dto/update-salud.dto';

@Injectable()
export class SaludService {
  create(createSaludDto: CreateSaludDto) {
    return 'This action adds a new salud';
  }

  findAll() {
    return `This action returns all salud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salud`;
  }

  update(id: number, updateSaludDto: UpdateSaludDto) {
    return `This action updates a #${id} salud`;
  }

  remove(id: number) {
    return `This action removes a #${id} salud`;
  }
}
