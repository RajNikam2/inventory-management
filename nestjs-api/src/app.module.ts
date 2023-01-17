import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { TeamMemberModule } from './team-member/team-member.module';
import { IndustryModule } from './industry/industry.module';
import { ContactsModule } from './contacts/contacts.module';
import { OrderModule } from './orders/orders.module';
import { DivisionModule } from './division/division.module';
import { RegionModule } from './region/region.module';
import { SaleTypeModule } from './sale-type/sale-type.module';
import { CommentsModule } from './comments/comments.module';
import { FilesModule } from './files/files.module';
import { ProductsModule } from './products/products.module';
import { ShipmentModule } from './shipment/shipment.module';
import { PaymentModule } from './payment/payment.module';
import { CommissionModule } from './commission/commission.module';
import { DocumentsModule } from './documents/documents.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { DeliveryTermModule } from './delivery-term/delivery-term.module';
import { DeliveryTimeModule } from './delivery-time/delivery-time.module';
import { PaymentTermModule } from './payment-term/payment-term.module';
import { ReminderModule } from './reminder/reminder.module';
import { OrderItemModule } from './order-item/order-item.module';
import { CategoryModule } from './category/category.module';
import { ShippingLineModule } from './shipping-line/shipping-line.module';
import { PortOfLoadingModule } from './port-of-loading/port-of-loading.module';
import { DestinationPortModule } from './destination-port/destination-port.module';
import { ShipmentByModule } from './shipment-by/shipment-by.module';
import { UrlModule } from './urls/urls.module';
import { ComplaintModule } from './complaint/complaint.module';
import { CountryModule } from './country/country.module';
import { DatabaseConfiguration } from './db-config/database.configuration';
import { ConfigModule } from '@nestjs/config';
import { TypeModule } from './type/type.module';
import { AuthModule } from './auth/auth.module';

console.log(process.env.NODE_ENV);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRootAsync({
        useClass: DatabaseConfiguration
    }),
    CustomerModule, SuppliersModule, TeamMemberModule, IndustryModule, ContactsModule, OrderModule, DivisionModule, RegionModule, SaleTypeModule, CategoryModule, SubCategoryModule, CommentsModule, FilesModule, ProductsModule, ShipmentModule, PaymentModule, CommissionModule, DocumentsModule, PaymentTermModule, DeliveryTimeModule, DeliveryTermModule, ReminderModule, OrderItemModule, ShippingLineModule, PortOfLoadingModule, DestinationPortModule, ShipmentByModule, UrlModule, ComplaintModule, CountryModule, TypeModule, AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
