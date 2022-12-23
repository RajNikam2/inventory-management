import { Module } from '@nestjs/common';
import { DeliveryTermService } from './delivery-term.service';
import { DeliveryTermController } from './delivery-term.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryTerm } from './delivery-term.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DeliveryTerm])],
  controllers: [DeliveryTermController],
  providers: [DeliveryTermService]
})
export class DeliveryTermModule {}
