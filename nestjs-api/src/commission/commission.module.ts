import { Module } from '@nestjs/common';
import { CommissionService } from './commission.service';
import { CommissionController } from './commission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commission } from './commission.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Commission])],
  controllers: [CommissionController],
  providers: [CommissionService]
})
export class CommissionModule {}
