import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { PaymentDto } from "./payment.dto";
import { Payment } from "./payment.entity";


@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment) private paymentRepository: Repository<Payment>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Payment>> {
        return paginate(query, this.paymentRepository, {
            sortableColumns: ['eta', 'balance', 'invoice_amount', 'invoice_number', 'no_of_days', 'bl', 'due_date'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['eta', 'balance', 'invoice_amount', 'invoice_number', 'no_of_days', 'bl', 'due_date'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listPaymentById(id: any) {
        return this.paymentRepository.findOne({
            where: { id: id }
        });
    }

    async create(paymentData: PaymentDto): Promise<PaymentDto> {
       try {
            return await this.paymentRepository.save(paymentData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, paymentData: PaymentDto): Promise<UpdateResult> {
       try {
            return await this.paymentRepository.update(id, paymentData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.paymentRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





