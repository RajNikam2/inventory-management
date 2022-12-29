import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { ShippingLineDto } from "./shipping-line.dto";
import { ShippingLine } from "./shipping-line.entity";
import { ShippingLineService } from "./shipping-line.service";

@Controller('shippingline')
export class ShippingLineController {
  constructor(
    private readonly shippingLineService: ShippingLineService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<ShippingLine>> {
    return this.shippingLineService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') shippinglineId: number) {
    return this.shippingLineService.listShippingLineById(shippinglineId);
  }

  @Post('create')
  async create(@Body() shippinglineData: ShippingLineDto): Promise<any> {
    return this.shippingLineService.create(shippinglineData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() shippinglineData: ShippingLineDto): Promise<any> {
    return this.shippingLineService.update(id, shippinglineData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.shippingLineService.delete(id);
  }
}

