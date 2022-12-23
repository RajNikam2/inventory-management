import { Controller } from '@nestjs/common';
import { ShipmentByService } from './shipment-by.service';

@Controller('shipment-by')
export class ShipmentByController {
  constructor(private readonly shipmentByService: ShipmentByService) {}
}
