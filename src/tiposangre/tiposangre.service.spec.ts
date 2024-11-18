import { Test, TestingModule } from '@nestjs/testing';
import { TiposangreService } from './tiposangre.service';

describe('TiposangreService', () => {
  let service: TiposangreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposangreService],
    }).compile();

    service = module.get<TiposangreService>(TiposangreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
