import { Test, TestingModule } from '@nestjs/testing';
import { NovedadnominaController } from './novedadnomina.controller';
import { NovedadnominaService } from './novedadnomina.service';

describe('NovedadnominaController', () => {
  let controller: NovedadnominaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovedadnominaController],
      providers: [NovedadnominaService],
    }).compile();

    controller = module.get<NovedadnominaController>(NovedadnominaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
