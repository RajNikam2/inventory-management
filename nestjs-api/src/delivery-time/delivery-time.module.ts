import { Module } from '@nestjs/common';
import { DeliveryTimeService } from './delivery-time.service';
import { DeliveryTimeController } from './delivery-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryTime } from './delivery-time.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DeliveryTime])],
  controllers: [DeliveryTimeController],
  providers: [DeliveryTimeService]
})
export class DeliveryTimeModule {}
