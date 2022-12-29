import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from 'src/comments/comments.module';
import { CommissionModule } from 'src/commission/commission.module';
import { CustomerModule } from 'src/customer/customer.module';
import { DocumentsModule } from 'src/documents/documents.module';
import { DocumentService } from 'src/documents/documents.service';
import { FilesModule } from 'src/files/files.module';
import { OrderItemModule } from 'src/order-item/order-item.module';
import { PaymentModule } from 'src/payment/payment.module';
import { PaymentService } from 'src/payment/payment.service';
import { ReminderModule } from 'src/reminder/reminder.module';
import { ReminderService } from 'src/reminder/reminder.service';
import { ShipmentModule } from 'src/shipment/shipment.module';
import { OrderController } from './orders.controller';
import { Order } from './orders.entity';
import { OrderService } from './orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order]),CommentsModule,ReminderModule,FilesModule,ShipmentModule,PaymentModule,CommissionModule,DocumentsModule,OrderItemModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports:[OrderService]
})
export class OrderModule {}
