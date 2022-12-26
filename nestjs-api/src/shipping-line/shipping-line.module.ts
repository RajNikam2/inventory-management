import { Module } from '@nestjs/common';
import { ShippingLineService } from './shipping-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingLine } from './shipping-line.entity';
import { ShippingLineController } from './shipping-line.controller';

@Module({
  imports:[TypeOrmModule.forFeature([ShippingLine])],
  controllers: [ShippingLineController],
  providers: [ShippingLineService]
})
export class ShippingLineModule {}
