import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { RegionDto } from "./region.dto";
import { Region } from "./region.entity";
import { RegionService } from "./region.service";

@Controller('region')
export class RegionController {
  constructor(
    private readonly regionService: RegionService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Region>> {
    return this.regionService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') regionId: number) {
    return this.regionService.listRegionById(regionId);
  }

  @Post('create')
  async create(@Body() regionData: RegionDto): Promise<any> {
    return this.regionService.create(regionData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() regionData: RegionDto): Promise<any> {
    return this.regionService.update(id, regionData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.regionService.delete(id);
  }
}

