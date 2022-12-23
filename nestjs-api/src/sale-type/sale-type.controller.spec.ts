import { Test, TestingModule } from '@nestjs/testing';
import { SaleTypeController } from './sale-type.controller';
import { SaleTypeService } from './sale-type.service';

describe('SaleTypeController', () => {
  let controller: SaleTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleTypeController],
      providers: [SaleTypeService],
    }).compile();

    controller = module.get<SaleTypeController>(SaleTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
