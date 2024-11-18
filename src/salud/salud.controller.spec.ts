import { Test, TestingModule } from '@nestjs/testing';
import { SaludController } from './salud.controller';
import { SaludService } from './salud.service';

describe('SaludController', () => {
  let controller: SaludController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaludController],
      providers: [SaludService],
    }).compile();

    controller = module.get<SaludController>(SaludController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
