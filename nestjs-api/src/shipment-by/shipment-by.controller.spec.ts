import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentByController } from './shipment-by.controller';
import { ShipmentByService } from './shipment-by.service';

describe('ShipmentByController', () => {
  let controller: ShipmentByController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipmentByController],
      providers: [ShipmentByService],
    }).compile();

    controller = module.get<ShipmentByController>(ShipmentByController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
