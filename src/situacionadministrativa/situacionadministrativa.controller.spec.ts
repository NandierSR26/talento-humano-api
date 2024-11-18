import { Test, TestingModule } from '@nestjs/testing';
import { SituacionadministrativaController } from './situacionadministrativa.controller';
import { SituacionadministrativaService } from './situacionadministrativa.service';

describe('SituacionadministrativaController', () => {
  let controller: SituacionadministrativaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SituacionadministrativaController],
      providers: [SituacionadministrativaService],
    }).compile();

    controller = module.get<SituacionadministrativaController>(SituacionadministrativaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
