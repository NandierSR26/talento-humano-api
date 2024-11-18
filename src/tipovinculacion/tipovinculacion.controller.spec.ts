import { Test, TestingModule } from '@nestjs/testing';
import { TipovinculacionController } from './tipovinculacion.controller';
import { TipovinculacionService } from './tipovinculacion.service';

describe('TipovinculacionController', () => {
  let controller: TipovinculacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipovinculacionController],
      providers: [TipovinculacionService],
    }).compile();

    controller = module.get<TipovinculacionController>(TipovinculacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
