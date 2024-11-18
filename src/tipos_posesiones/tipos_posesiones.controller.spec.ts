import { Test, TestingModule } from '@nestjs/testing';
import { TiposPosesionesController } from './tipos_posesiones.controller';
import { TiposPosesionesService } from './tipos_posesiones.service';

describe('TiposPosesionesController', () => {
  let controller: TiposPosesionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposPosesionesController],
      providers: [TiposPosesionesService],
    }).compile();

    controller = module.get<TiposPosesionesController>(TiposPosesionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
