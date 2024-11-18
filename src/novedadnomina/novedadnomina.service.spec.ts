import { Test, TestingModule } from '@nestjs/testing';
import { NovedadnominaService } from './novedadnomina.service';

describe('NovedadnominaService', () => {
  let service: NovedadnominaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovedadnominaService],
    }).compile();

    service = module.get<NovedadnominaService>(NovedadnominaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
