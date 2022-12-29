import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { SaleTypeDto } from "./sale-type.dto";
import { SaleType } from "./sale-type.entity";
import { SalteTypeService } from "./sale-type.service";

@Controller('saletype')
export class saletypeController {
  constructor(
    private readonly saletypeService:SalteTypeService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<SaleType>> {
    return this.saletypeService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') saletypeId: number) {
    return this.saletypeService.listSaletypeById(saletypeId);
  }

  @Post('create')
  async create(@Body() saletypeData: SaleType): Promise<any> {
    return this.saletypeService.create(saletypeData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() saletypeData: SaleType): Promise<any> {
    return this.saletypeService.update(id, saletypeData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.saletypeService.delete(id);
  }
}

