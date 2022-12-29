import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DivistionDto } from "./division.dto";
import { Division } from "./division.entity";
import { DivisionService } from "./division.service";

@Controller('division')
export class DivisionController {
  constructor(
    private readonly DivisionService: DivisionService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Division>> {
    return this.DivisionService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') divisionId: number) {
    return this.DivisionService.listDivisionById(divisionId);
  }

  @Post('create')
  async create(@Body() divisionData: DivistionDto): Promise<any> {
    return this.DivisionService.create(divisionData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() divisionData: DivistionDto): Promise<any> {
    return this.DivisionService.update(id, divisionData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.DivisionService.delete(id);
  }
}

