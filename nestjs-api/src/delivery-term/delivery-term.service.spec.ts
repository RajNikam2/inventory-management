import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryTermService } from './delivery-term.service';

describe('DeliveryTermService', () => {
  let service: DeliveryTermService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryTermService],
    }).compile();

    service = module.get<DeliveryTermService>(DeliveryTermService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
