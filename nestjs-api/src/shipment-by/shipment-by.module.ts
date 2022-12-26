import { Module } from '@nestjs/common';
import { ShipmentByService } from './shipment-by.service';
import { ShipmentByController } from './shipment-by.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentBy } from './shipment-by.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ShipmentBy])],
  controllers: [ShipmentByController],
  providers: [ShipmentByService]
})
export class ShipmentByModule {}
