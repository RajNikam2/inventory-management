import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlModule } from 'src/urls/urls.module';
import { SupplierController } from './suppliers.controller';
import { Supplier } from './suppliers.entity';
import { SupplierService } from './suppliers.service';

@Module({
  imports:[TypeOrmModule.forFeature([Supplier]),UrlModule],
  controllers: [SupplierController],
  providers: [SupplierService]
})
export class SuppliersModule {}
