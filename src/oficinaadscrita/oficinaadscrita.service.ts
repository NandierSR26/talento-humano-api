import { Injectable } from '@nestjs/common';
import { CreateOficinaadscritaDto } from './dto/create-oficinaadscrita.dto';
import { UpdateOficinaadscritaDto } from './dto/update-oficinaadscrita.dto';

@Injectable()
export class OficinaadscritaService {
  create(createOficinaadscritaDto: CreateOficinaadscritaDto) {
    return 'This action adds a new oficinaadscrita';
  }

  findAll() {
    return `This action returns all oficinaadscrita`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oficinaadscrita`;
  }

  update(id: number, updateOficinaadscritaDto: UpdateOficinaadscritaDto) {
    return `This action updates a #${id} oficinaadscrita`;
  }

  remove(id: number) {
    return `This action removes a #${id} oficinaadscrita`;
  }
}
