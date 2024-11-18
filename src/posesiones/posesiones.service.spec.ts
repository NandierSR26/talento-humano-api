import { Test, TestingModule } from '@nestjs/testing';
import { PosesionesService } from './posesiones.service';

describe('PosesionesService', () => {
  let service: PosesionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosesionesService],
    }).compile();

    service = module.get<PosesionesService>(PosesionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
