import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { UrlDto } from "./urls.dto";
import { Url } from "./urls.entity";
import { UrlService } from "./urls.service";

@Controller('url')
export class UrlController {
  constructor(
    private readonly urlService: UrlService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Url>> {
    return this.urlService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') urlId: number) {
    return this.urlService.listUrlById(urlId);
  }

  @Post('create')
  async create(@Body() urlData: UrlDto): Promise<any> {
    return this.urlService.create(urlData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() urlData: UrlDto): Promise<any> {
    return this.urlService.update(id, urlData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.urlService.delete(id);
  }
}

