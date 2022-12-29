import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { Paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { CommentDto } from 'src/comments/comments.dto';
import { CommentService } from 'src/comments/comments.service';
import { CommissionDto } from 'src/commission/commission.dto';
import { CommissionService } from 'src/commission/commission.service';
import { DocumentDto } from 'src/documents/documents.dto';
import { DocumentService } from 'src/documents/documents.service';
import { FileDto } from 'src/files/files.dto';
import { FileService } from 'src/files/files.service';
import { OrderItemDto } from 'src/order-item/order-item.dto';
import { OrderItemService } from 'src/order-item/order-item.service';
import { PaymentDto } from 'src/payment/payment.dto';
import { PaymentService } from 'src/payment/payment.service';
import { ReminderDto } from 'src/reminder/reminder.dto';
import { ReminderService } from 'src/reminder/reminder.service';
import { ShipmentDto } from 'src/shipment/shipment.dto';
import { ShipmentService } from 'src/shipment/shipment.service';
import { OrderDto } from './orders.dto';
import { Order } from './orders.entity';
import { OrderService } from './orders.service';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly commentService:CommentService,
    private readonly reminderService:ReminderService,
    private readonly fileService:FileService,
    private readonly shipmentService:ShipmentService,
    private readonly paymentService:PaymentService,
    private readonly commissionService:CommissionService,
    private readonly documentService:DocumentService,
    private readonly orderItemService:OrderItemService
    
    ) { }

  @Get()
  public findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Order>> {
    return this.orderService.findAll(query);
  }
  
  @Get('/:id')
  public findtById(@Param('oid') orderId: number) {
    return this.orderService.findOrderById(orderId);
  }
  
  @Post('create')
  async create(@Body() orderData: OrderDto): Promise<any> {
    return this.orderService.create(orderData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() orderData: OrderDto): Promise<any> {
    return this.orderService.update(id, orderData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.orderService.delete(id);
  }

  @Post('/:id/comment')
  async createComment(@Body() commentData: CommentDto): Promise<any> {
    return this.commentService.create(commentData);
  }

  @Get('/:id/comment')
  getCommentByOrderId(@Param('id') orderId: number) {
    return this.orderService.findOrderComment(orderId);
  }

  @Post('/:id/reminder')
  async createReminder(@Body() reminderData: ReminderDto): Promise<any> {
    return this.reminderService.create(reminderData);
  }

  @Get('/:id/reminder')
  getReminderByOrderId(@Param('id') orderId: number) {
    return this.orderService.findOrderReminder(orderId);
  }

  @Post('/:id/file')
  async createFile(@Body() fileData: FileDto): Promise<any> {
    return this.fileService.create(fileData);
  }

  @Get('/:id/file')
  getFileByOrderId(@Param('id') orderId: number) {
    return this.orderService.findOrderFile(orderId);
  }

  @Post('/:id/shipment')
  async createShipment(@Body() shipmentData: ShipmentDto): Promise<any> {
    return this.shipmentService.create(shipmentData);
  }

  @Get('/:id/shipment')
  getShipmentByOrderId(@Param('id') orderId: number) {
    return this.orderService.findOrderShipment(orderId);
  }
 
  @Post('/:id/payment')
  async createPayment(@Body() paymentData: PaymentDto): Promise<any> {
    return this.paymentService.create(paymentData);
  }

  @Get('/:id/payment')
  getPaymentByOrderId(@Param('id') orderId: number) {
    return this.orderService.findOrderPayment(orderId);
  }

  @Post('/:id/commission')
  async createCommission(@Body() commissionData: CommissionDto): Promise<any> {
    return this.commissionService.create(commissionData);
  }

  @Get('/:id/commission')
  getCommissionByOrderId(@Param('id') orderId: number) {
    return this.orderService.findOrderCommission(orderId);
  }

  @Post('/:id/document')
  async createDocument(@Body() documentData: DocumentDto): Promise<any> {
    return this.documentService.create(documentData);
  }

  @Get('/:id/document')
  getDocumentByOrderId(@Param('id') orderId: number) {
    return this.orderService.findOrderDocument(orderId);
  }

  @Post('/:id/orderItem')
  async createOrderItem(@Body() orderitemData: OrderItemDto): Promise<any> {
    return this.orderItemService.create(orderitemData);
  }

  @Get('/:id/orderItem')
  getItemByOrderId(@Param('id') orderId: number) {
    return this.orderService.findOrderItem(orderId);
  }
}

