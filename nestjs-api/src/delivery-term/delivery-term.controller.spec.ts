import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryTermController } from './delivery-term.controller';
import { DeliveryTermService } from './delivery-term.service';

describe('DeliveryTermController', () => {
  let controller: DeliveryTermController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryTermController],
      providers: [DeliveryTermService],
    }).compile();

    controller = module.get<DeliveryTermController>(DeliveryTermController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
