import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { CommissionDto } from "./commission.dto";
import { Commission } from "./commission.entity";
import { CommissionService } from "./commission.service";

@Controller('commission')
export class CommissionController {
  constructor(
    private readonly commissionService: CommissionService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Commission>> {
    return this.commissionService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') commissionId: number) {
    return this.commissionService.listCommissionById(commissionId);
  }

  @Post('create')
  async create(@Body() commissionData: CommissionDto): Promise<any> {
    return this.commissionService.create(commissionData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() commissionData: CommissionDto): Promise<any> {
    return this.commissionService.update(id, commissionData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.commissionService.delete(id);
  }
}

