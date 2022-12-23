import { Test, TestingModule } from '@nestjs/testing';
import { ShippingLineController } from './shipping-line.controller';
import { ShippingLineService } from './shipping-line.service';

describe('ShippingLineController', () => {
  let controller: ShippingLineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingLineController],
      providers: [ShippingLineService],
    }).compile();

    controller = module.get<ShippingLineController>(ShippingLineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
