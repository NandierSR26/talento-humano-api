import { Test, TestingModule } from '@nestjs/testing';
import { MisrolesController } from './misroles.controller';
import { MisrolesService } from './misroles.service';

describe('MisrolesController', () => {
  let controller: MisrolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MisrolesController],
      providers: [MisrolesService],
    }).compile();

    controller = module.get<MisrolesController>(MisrolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
