import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryTimeController } from './delivery-time.controller';
import { DeliveryTimeService } from './delivery-time.service';

describe('DeliveryTimeController', () => {
  let controller: DeliveryTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryTimeController],
      providers: [DeliveryTimeService],
    }).compile();

    controller = module.get<DeliveryTimeController>(DeliveryTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
