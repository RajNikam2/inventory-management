import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { PaymentTermDto } from "./payment-term.dto";
import { PaymentTerm } from "./payment-term.entity";


@Injectable()
export class PaymentTermService {
    constructor(
        @InjectRepository(PaymentTerm) private paymentTermRepository: Repository<PaymentTerm>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<PaymentTerm>> {
        return paginate(query, this.paymentTermRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id', 'DESC']],
            searchableColumns: ['name'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listPayemntTermById(id: any) {
        return this.paymentTermRepository.findOne({
            where: { id: id }
        });
    }

    async create(PaymentTermData: PaymentTermDto): Promise<PaymentTermDto> {
       try {
            return await this.paymentTermRepository.save(PaymentTermData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, PaymentTermData: PaymentTermDto): Promise<UpdateResult> {
       try {
            return await this.paymentTermRepository.update(id, PaymentTermData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.paymentTermRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





