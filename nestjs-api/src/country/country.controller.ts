import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { CountryDto } from "./country.dto";
import { Country } from "./country.entity";
import { CountryService } from "./country.service";

@Controller('country')
export class CountryController {
  constructor(
    private readonly countryService: CountryService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Country>> {
    return this.countryService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') countryId: number) {
    return this.countryService.listcountryById(countryId);
  }

  @Post('create')
  async create(@Body() countryData: CountryDto): Promise<any> {
    return this.countryService.create(countryData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() countryData: CountryDto): Promise<any> {
    return this.countryService.update(id, countryData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.countryService.delete(id);
  }
}

