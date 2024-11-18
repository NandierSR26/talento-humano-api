import { Test, TestingModule } from '@nestjs/testing';
import { TipoActoAdministrativoController } from './tipo_acto_administrativo.controller';
import { TipoActoAdministrativoService } from './tipo_acto_administrativo.service';

describe('TipoActoAdministrativoController', () => {
  let controller: TipoActoAdministrativoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoActoAdministrativoController],
      providers: [TipoActoAdministrativoService],
    }).compile();

    controller = module.get<TipoActoAdministrativoController>(TipoActoAdministrativoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
