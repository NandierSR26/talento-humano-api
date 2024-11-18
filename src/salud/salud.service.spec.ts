import { Test, TestingModule } from '@nestjs/testing';
import { SaludService } from './salud.service';

describe('SaludService', () => {
  let service: SaludService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaludService],
    }).compile();

    service = module.get<SaludService>(SaludService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
