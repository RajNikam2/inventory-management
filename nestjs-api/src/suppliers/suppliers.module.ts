import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierController } from './suppliers.controller';
import { Supplier } from './suppliers.entity';
import { SupplierService } from './suppliers.service';

@Module({
  imports:[TypeOrmModule.forFeature([Supplier])],
  controllers: [SupplierController],
  providers: [SupplierService]
})
export class SuppliersModule {}
