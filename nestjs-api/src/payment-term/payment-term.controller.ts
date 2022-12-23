import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { PaymentTermDto } from "./payment-term.dto";
import { PaymentTerm } from "./payment-term.entity";
import { PaymentTermService } from "./payment-term.service";

@Controller('paymentTerm')
export class PaymentTermController {
  constructor(
    private readonly paymentTermService: PaymentTermService,
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<PaymentTerm>> {
    return this.paymentTermService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') paymentTermId: number) {
    return this.paymentTermService.listPayemntTermById(paymentTermId);
  }

  @Post('create')
  async create(@Body() PaymentTermData: PaymentTermDto): Promise<any> {
    return this.paymentTermService.create(PaymentTermData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() PaymentTermData: PaymentTermDto): Promise<any> {
    return this.paymentTermService.update(id, PaymentTermData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.paymentTermService.delete(id);
  }
}

