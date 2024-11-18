import { Test, TestingModule } from '@nestjs/testing';
import { EstadocivilService } from './estadocivil.service';

describe('EstadocivilService', () => {
  let service: EstadocivilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadocivilService],
    }).compile();

    service = module.get<EstadocivilService>(EstadocivilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
