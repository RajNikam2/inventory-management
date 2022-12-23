import { Module } from '@nestjs/common';
import { ShipmentByService } from './shipment-by.service';
import { ShipmentByController } from './shipment-by.controller';

@Module({
  controllers: [ShipmentByController],
  providers: [ShipmentByService]
})
export class ShipmentByModule {}
