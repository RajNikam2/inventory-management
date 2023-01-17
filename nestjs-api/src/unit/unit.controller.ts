import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { UnitDto } from "./unit.dto";
import { Unit } from "./unit.entity";
import { UnitService } from "./unit.service";

@Controller('unit')
export class UnitController{
  constructor(
    private readonly unitService: UnitService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Unit>> {
    return this.unitService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') unitId: number) {
    return this.unitService.listUnitById(unitId);
  }

  @Post('create')
  async create(@Body() unitData: UnitDto): Promise<any> {
    return this.unitService.create(unitData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() unitData: UnitDto): Promise<any> {
    return this.unitService.update(id, unitData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.unitService.delete(id);
  }
}

