import { Module } from '@nestjs/common';
import { PaymentTermService } from './payment-term.service';
import { PaymentTermController } from './payment-term.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTerm } from './payment-term.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PaymentTerm])],
  controllers: [PaymentTermController],
  providers: [PaymentTermService]
})
export class PaymentTermModule {}
