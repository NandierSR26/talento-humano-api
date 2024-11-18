import { Injectable } from '@nestjs/common';
import { CreateMisroleDto } from './dto/create-misrole.dto';
import { UpdateMisroleDto } from './dto/update-misrole.dto';

@Injectable()
export class MisrolesService {
  create(createMisroleDto: CreateMisroleDto) {
    return 'This action adds a new misrole';
  }

  findAll() {
    return `This action returns all misroles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} misrole`;
  }

  update(id: number, updateMisroleDto: UpdateMisroleDto) {
    return `This action updates a #${id} misrole`;
  }

  remove(id: number) {
    return `This action removes a #${id} misrole`;
  }
}
