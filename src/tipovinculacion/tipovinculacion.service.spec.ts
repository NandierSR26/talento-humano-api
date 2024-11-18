import { Test, TestingModule } from '@nestjs/testing';
import { TipovinculacionService } from './tipovinculacion.service';

describe('TipovinculacionService', () => {
  let service: TipovinculacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipovinculacionService],
    }).compile();

    service = module.get<TipovinculacionService>(TipovinculacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
