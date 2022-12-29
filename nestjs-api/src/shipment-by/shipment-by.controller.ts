import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { ShipmentByDto } from "./shipment-by.dto";
import { ShipmentBy } from "./shipment-by.entity";
import { ShipmentByService } from "./shipment-by.service";

@Controller('shipmentby')
export class ShipmentByController {
  constructor(
    private readonly shipmentbyService: ShipmentByService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<ShipmentBy>> {
    return this.shipmentbyService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') shipmentbyId: number) {
    return this.shipmentbyService.listShipmentById(shipmentbyId);
  }

  @Post('create')
  async create(@Body() shipmentbyData: ShipmentByDto): Promise<any> {
    return this.shipmentbyService.create(shipmentbyData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() shipmentbyData: ShipmentByDto): Promise<any> {
    return this.shipmentbyService.update(id, shipmentbyData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.shipmentbyService.delete(id);
  }
}

