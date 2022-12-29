import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { PaymentDto } from "./payment.dto";
import { Payment } from "./payment.entity";
import { PaymentService } from "./payment.service";

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Payment>> {
    return this.paymentService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') paymentId: number) {
    return this.paymentService.listPaymentById(paymentId);
  }

  @Post('create')
  async create(@Body() paymentData: PaymentDto): Promise<any> {
    return this.paymentService.create(paymentData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() paymentData: PaymentDto): Promise<any> {
    return this.paymentService.update(id, paymentData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.paymentService.delete(id);
  }
}

