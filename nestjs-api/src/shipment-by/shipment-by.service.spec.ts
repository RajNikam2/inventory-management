import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentByService } from './shipment-by.service';

describe('ShipmentByService', () => {
  let service: ShipmentByService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipmentByService],
    }).compile();

    service = module.get<ShipmentByService>(ShipmentByService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
