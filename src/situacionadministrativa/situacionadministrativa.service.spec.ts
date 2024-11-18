import { Test, TestingModule } from '@nestjs/testing';
import { SituacionadministrativaService } from './situacionadministrativa.service';

describe('SituacionadministrativaService', () => {
  let service: SituacionadministrativaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SituacionadministrativaService],
    }).compile();

    service = module.get<SituacionadministrativaService>(SituacionadministrativaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
