import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { PortOfLoadingDto } from "./port-of-loading.dto";
import { PortOfLoading } from "./port-of-loading.entity";
import { PortOfLoadingService } from "./port-of-loading.service";

@Controller('portofloading')
export class PotOfLoadingController {
  constructor(
    private readonly loadingPortService: PortOfLoadingService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<PortOfLoading>> {
    return this.loadingPortService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') loadingportId: number) {
    return this.loadingPortService.listloadingPortById(loadingportId);
  }

  @Post('create')
  async create(@Body() loadingportData: PortOfLoadingDto): Promise<any> {
    return this.loadingPortService.create(loadingportData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() loadingportData: PortOfLoadingDto): Promise<any> {
    return this.loadingPortService.update(id, loadingportData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.loadingPortService.delete(id);
  }
}

