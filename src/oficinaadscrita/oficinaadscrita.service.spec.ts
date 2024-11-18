import { Test, TestingModule } from '@nestjs/testing';
import { OficinaadscritaService } from './oficinaadscrita.service';

describe('OficinaadscritaService', () => {
  let service: OficinaadscritaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OficinaadscritaService],
    }).compile();

    service = module.get<OficinaadscritaService>(OficinaadscritaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
