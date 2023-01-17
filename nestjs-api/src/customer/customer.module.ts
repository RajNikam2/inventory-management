import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { UrlModule } from 'src/urls/urls.module';
import { CountryService } from 'src/country/country.service';
import { IndustryService } from 'src/industry/industry.service';
import { CountryModule } from 'src/country/country.module';
import { IndustryModule } from 'src/industry/industry.module';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]),UrlModule,CountryModule,IndustryModule],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports:[CustomerService]
})
export class CustomerModule { }
