import { Test, TestingModule } from '@nestjs/testing';
import { OficinaadscritaController } from './oficinaadscrita.controller';
import { OficinaadscritaService } from './oficinaadscrita.service';

describe('OficinaadscritaController', () => {
  let controller: OficinaadscritaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OficinaadscritaController],
      providers: [OficinaadscritaService],
    }).compile();

    controller = module.get<OficinaadscritaController>(OficinaadscritaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
