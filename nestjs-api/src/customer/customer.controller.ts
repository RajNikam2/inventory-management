import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { CountryDto } from "src/country/country.dto";
import { CountryService } from "src/country/country.service";
import { IndustryDto } from "src/industry/industry.dto";
import { IndustryService } from "src/industry/industry.service";
import { UrlService } from "src/urls/urls.service";
import { CustomerDto } from "./customer.dto";
import { Customer } from "./customer.entity";
import { CustomerService } from "./customer.service";


@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly countryService:CountryService,
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
  async create(@Body() customerData: CustomerDto) {
    return  this.customerService.create(customerData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() customerData: CustomerDto): Promise<any> {
    return this.customerService.update(id, customerData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.customerService.delete(id);
  }

  @Post('/:id/country')
  async createCountry(@Body() countryData: CountryDto): Promise<any> {
    return this.countryService.create(countryData);
  }

  @Post('/:id/industry')
  async createIndustry(@Body() industryData: IndustryDto): Promise<any> {
    return this.countryService.create(industryData);
  }

  @Get('/:id/country')
  getCountry(@Param('id') countryId: number) {
    return this.customerService.findCountryByCustId(countryId);
  }

  @Get('/:id/industry')
  getIndustry(@Param('id') industryId: number) {
    return this.customerService.findIndustryByCustId(industryId);
  }
  // @Patch('/:pid/country/:aid')
  // async updateCustomerCountry(@Param('cid') cid, @Body() countryData: Country): Promise<any> {
  //   //return this.patientService.updatePatientAppoitment(aid, appointmentData);
  //   return this.appointmentService.update(aid,appointmentData)
  // }

}

