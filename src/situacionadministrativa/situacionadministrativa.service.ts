import { Injectable } from '@nestjs/common';
import { CreateSituacionadministrativaDto } from './dto/create-situacionadministrativa.dto';
import { UpdateSituacionadministrativaDto } from './dto/update-situacionadministrativa.dto';

@Injectable()
export class SituacionadministrativaService {
  create(createSituacionadministrativaDto: CreateSituacionadministrativaDto) {
    return 'This action adds a new situacionadministrativa';
  }

  findAll() {
    return `This action returns all situacionadministrativa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} situacionadministrativa`;
  }

  update(id: number, updateSituacionadministrativaDto: UpdateSituacionadministrativaDto) {
    return `This action updates a #${id} situacionadministrativa`;
  }

  remove(id: number) {
    return `This action removes a #${id} situacionadministrativa`;
  }
}
