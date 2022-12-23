import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeliveryTimeDto } from "./delivery-time.dto";
import { DeliveryTime } from "./delivery-time.entity";
import { DeliveryTimeService } from "./delivery-time.service";

@Controller('deliveryTime')
export class DeliveryTimeController {
  constructor(
    private readonly deliveryTimeService: DeliveryTimeService,
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<DeliveryTime>> {
    return this.deliveryTimeService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') deliveryTimeId: number) {
    return this.deliveryTimeService.listDeliveryTimeById(deliveryTimeId);
  }

  @Post('create')
  async create(@Body() deliveryTimeData: DeliveryTimeDto): Promise<any> {
    return this.deliveryTimeService.create(deliveryTimeData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() deliveryTimeData: DeliveryTimeDto): Promise<any> {
    return this.deliveryTimeService.update(id, deliveryTimeData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.deliveryTimeService.delete(id);
  }
}

