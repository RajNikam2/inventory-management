import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { OrderDto } from "./orders.dto";
import { Order } from "./orders.entity";
import { OrderService } from "./orders.service";

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
  ) { }

  @Get('')
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Order>> {
    return this.orderService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') orderId: number) {
    return this.orderService.listOrderById(orderId);
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
}

