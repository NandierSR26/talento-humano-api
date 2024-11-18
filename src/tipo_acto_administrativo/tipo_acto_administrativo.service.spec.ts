import { Test, TestingModule } from '@nestjs/testing';
import { TipoActoAdministrativoService } from './tipo_acto_administrativo.service';

describe('TipoActoAdministrativoService', () => {
  let service: TipoActoAdministrativoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoActoAdministrativoService],
    }).compile();

    service = module.get<TipoActoAdministrativoService>(TipoActoAdministrativoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
