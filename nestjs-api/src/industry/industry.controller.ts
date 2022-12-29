import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { IndustryDto } from "./industry.dto";
import { Industry } from "./industry.entity";
import { IndustryService } from "./industry.service";

@Controller('industry')
export class IndustryController {
  constructor(
    private readonly industryService: IndustryService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Industry>> {
    return this.industryService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') industryId: number) {
    return this.industryService.listIndustryById(industryId);
  }

  @Post('create')
  async create(@Body() industryData: IndustryDto): Promise<any> {
    return this.industryService.create(industryData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() industryData: IndustryDto): Promise<any> {
    return this.industryService.update(id, industryData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.industryService.delete(id);
  }
}

