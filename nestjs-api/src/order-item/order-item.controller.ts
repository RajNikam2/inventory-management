import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { OrderDto } from "src/orders/orders.dto";
import { Order } from "src/orders/orders.entity";
import { OrderItemDto } from "./order-item.dto";
import { OrderItem } from "./order-item.entity";
import { OrderItemService } from "./order-item.service";

@Controller('orderItem')
export class OrderItemController {
  constructor(
    private readonly orderItemService: OrderItemService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<OrderItem>> {
    return this.orderItemService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') orderItemId: number) {
    return this.orderItemService.listorderItemById(orderItemId);
  }

  @Post('create')
  async create(@Body() orderItemData: OrderItemDto): Promise<any> {
    return this.orderItemService.create(orderItemData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() orderItemData: OrderItemDto): Promise<any> {
    return this.orderItemService.update(id, orderItemData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.orderItemService.delete(id);
  }
}

