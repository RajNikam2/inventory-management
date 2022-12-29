import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeliveryTermDto } from "./delivery-term.dto";
import { DeliveryTerm } from "./delivery-term.entity";
import { DeliveryTermService } from "./delivery-term.service";

@Controller('deliveryTerm')
export class DeliveryTermController {
  constructor(
    private readonly deliveryTermService: DeliveryTermService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<DeliveryTerm>> {
    return this.deliveryTermService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') deliveryTermId: number) {
    return this.deliveryTermService.listdeliveryTermById(deliveryTermId);
  }

  @Post('create')
  async create(@Body() deliveryTermData: DeliveryTermDto): Promise<any> {
    return this.deliveryTermService.create(deliveryTermData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() deliveryTermData: DeliveryTermDto): Promise<any> {
    return this.deliveryTermService.update(id, deliveryTermData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.deliveryTermService.delete(id);
  }
}

