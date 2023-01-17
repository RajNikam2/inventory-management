import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { TypeDto } from "./type.dto";
import { Type } from "./type.entity";
import { TypeService } from "./type.service";

@Controller('type')
export class TypeController {
  constructor(
    private readonly typeService: TypeService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Type>> {
    return this.typeService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') typeId: number) {
    return this.typeService.listTypeById(typeId);
  }

  @Post('create')
  async create(@Body() typeData: TypeDto): Promise<any> {
    return this.typeService.create(typeData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() typeData: TypeDto): Promise<any> {
    return this.typeService.update(id, typeData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.typeService.delete(id);
  }
}

