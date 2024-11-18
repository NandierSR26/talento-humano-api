import { Test, TestingModule } from '@nestjs/testing';
import { EstadocivilController } from './estadocivil.controller';
import { EstadocivilService } from './estadocivil.service';

describe('EstadocivilController', () => {
  let controller: EstadocivilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadocivilController],
      providers: [EstadocivilService],
    }).compile();

    controller = module.get<EstadocivilController>(EstadocivilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
