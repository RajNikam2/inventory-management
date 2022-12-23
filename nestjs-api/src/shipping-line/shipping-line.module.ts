import { Module } from '@nestjs/common';
import { ShippingLineService } from './shipping-line.service';
import { ShippingLineController } from './shipping-line.controller';

@Module({
  controllers: [ShippingLineController],
  providers: [ShippingLineService]
})
export class ShippingLineModule {}
