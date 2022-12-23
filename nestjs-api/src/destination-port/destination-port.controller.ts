import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DestinationPortDto } from "./destination-port.dto";
import { DestinationPort } from "./destination-port.entity";
import { DestinationPortService } from "./destination-port.service";

@Controller('destinationPort')
export class DestinationPortController {
  constructor(
    private readonly destinationPortService: DestinationPortService,
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<DestinationPort>> {
    return this.destinationPortService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') destinationPortId: number) {
    return this.destinationPortService.listdestionationPortById(destinationPortId);
  }

  @Post('create')
  async create(@Body() destinationPortId: DestinationPortDto): Promise<any> {
    return this.destinationPortService.create(destinationPortId);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() destinationPortData: DestinationPortDto): Promise<any> {
    return this.destinationPortService.update(id, destinationPortData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.destinationPortService.delete(id);
  }
}

