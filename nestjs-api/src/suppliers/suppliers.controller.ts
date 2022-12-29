import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { sulpplierDto } from "./suppliers.dto";
import { Supplier } from "./suppliers.entity";
import { SupplierService } from "./suppliers.service";

@Controller('supplier')
export class SupplierController {
  constructor(
    private readonly supplierService: SupplierService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Supplier>> {
    return this.supplierService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') supplierId: number) {
    return this.supplierService.listsupplierById(supplierId);
  }

  @Post('create')
  async create(@Body() supplierData: sulpplierDto): Promise<any> {
    return this.supplierService.create(supplierData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() supplierData: sulpplierDto): Promise<any> {
    return this.supplierService.update(id, supplierData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.supplierService.delete(id);
  }
}

