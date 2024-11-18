import { Injectable } from '@nestjs/common';
import { CreateTipoActoAdministrativoDto } from './dto/create-tipo_acto_administrativo.dto';
import { UpdateTipoActoAdministrativoDto } from './dto/update-tipo_acto_administrativo.dto';

@Injectable()
export class TipoActoAdministrativoService {
  create(createTipoActoAdministrativoDto: CreateTipoActoAdministrativoDto) {
    return 'This action adds a new tipoActoAdministrativo';
  }

  findAll() {
    return `This action returns all tipoActoAdministrativo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoActoAdministrativo`;
  }

  update(id: number, updateTipoActoAdministrativoDto: UpdateTipoActoAdministrativoDto) {
    return `This action updates a #${id} tipoActoAdministrativo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoActoAdministrativo`;
  }
}
