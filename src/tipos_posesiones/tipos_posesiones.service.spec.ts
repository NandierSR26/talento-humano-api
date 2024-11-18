import { Test, TestingModule } from '@nestjs/testing';
import { TiposPosesionesService } from './tipos_posesiones.service';

describe('TiposPosesionesService', () => {
  let service: TiposPosesionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposPosesionesService],
    }).compile();

    service = module.get<TiposPosesionesService>(TiposPosesionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
