import { Test, TestingModule } from '@nestjs/testing';
import { PosesionesController } from './posesiones.controller';
import { PosesionesService } from './posesiones.service';

describe('PosesionesController', () => {
  let controller: PosesionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosesionesController],
      providers: [PosesionesService],
    }).compile();

    controller = module.get<PosesionesController>(PosesionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
