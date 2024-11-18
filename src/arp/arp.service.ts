import { Injectable } from '@nestjs/common';
import { CreateArpDto } from './dto/create-arp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Arp } from './entities/arp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArpService {
  constructor(
    @InjectRepository(Arp)
    private arpRepository: Repository<Arp>,
  ) {}

  async create(createArpDto: CreateArpDto) {
    const newArp = this.arpRepository.create(createArpDto);
    await this.arpRepository.save(newArp);

    return newArp;
  }

  async findAll() {
    const arplist = await this.arpRepository.find();
    return arplist;
  }

  async findOne(id: number) {
    const arpById = await this.arpRepository.findOneBy({ idarp: id });
    return arpById;
  }

  async remove(id: number) {
    const arp = await this.findOne(id);
    await this.arpRepository.remove(arp);
    return `Arp con ID ${id} eliminado`;
  }
}
