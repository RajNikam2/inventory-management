import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { CustomerDto } from "./customer.dto";
import { Customer } from "./customer.entity";
import { CustomerService } from "./customer.service";


@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Customer>> {
    return this.customerService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') customerId: number) {
    return this.customerService.listCustomerById(customerId);
  }

  @Post('create')
  async create(@Body() customerData: CustomerDto): Promise<any> {
    return this.customerService.create(customerData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() customerData: CustomerDto): Promise<any> {
    return this.customerService.update(id, customerData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.customerService.delete(id);
  }
}

