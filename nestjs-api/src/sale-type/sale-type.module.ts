import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { saletypeController } from './sale-type.controller';
import { SaleType } from './sale-type.entity';
import { SalteTypeService } from './sale-type.service';

@Module({
  imports:[TypeOrmModule.forFeature([SaleType])],
  controllers: [saletypeController],
  providers: [SalteTypeService]
})
export class SaleTypeModule {}
