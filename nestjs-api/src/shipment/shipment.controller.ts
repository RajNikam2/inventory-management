import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { ShipmentDto } from "./shipment.dto";
import { Shipment } from "./shipment.entity";
import { ShipmentService } from "./shipment.service";

@Controller('shipment')
export class ShipmentController{
  constructor(
    private readonly shipmentService: ShipmentService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Shipment>> {
    return this.shipmentService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') shipmentId: number) {
    return this.shipmentService.listShipmentById(shipmentId);
  }

  @Post('create')
  async create(@Body() shipmentData: ShipmentDto): Promise<any> {
    return this.shipmentService.create(shipmentData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() shipmentData: ShipmentDto): Promise<any> {
    return this.shipmentService.update(id, shipmentData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.shipmentService.delete(id);
  }
}

