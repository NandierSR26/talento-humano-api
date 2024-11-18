import { Test, TestingModule } from '@nestjs/testing';
import { TiposangreController } from './tiposangre.controller';
import { TiposangreService } from './tiposangre.service';

describe('TiposangreController', () => {
  let controller: TiposangreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposangreController],
      providers: [TiposangreService],
    }).compile();

    controller = module.get<TiposangreController>(TiposangreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
