import { Test, TestingModule } from '@nestjs/testing';
import { MisrolesService } from './misroles.service';

describe('MisrolesService', () => {
  let service: MisrolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MisrolesService],
    }).compile();

    service = module.get<MisrolesService>(MisrolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
