import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CustomerDto } from "./customer.dto";
import { Customer} from "./customer.entity";


@Injectable()
export class CustomerService{
    constructor(
        @InjectRepository(Customer) private customerRepository: Repository<Customer>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Customer>> {
        return paginate(query, this.customerRepository, {
            sortableColumns: ['organization','address','notes' ],
            defaultSortBy: [['id','ASC'] ],
            searchableColumns: ['address',],
            filterableColumns: {
                address: [FilterOperator.GTE, FilterOperator.LTE],
            }
        })
    }

    async listCustomerById(id: any) {
        return this.customerRepository.findOne({
            where: { id: id }
        });
    }

    async create(customerData: CustomerDto): Promise<CustomerDto> {
        return await this.customerRepository.save(customerData);
    }

    async update(id, customerData: CustomerDto): Promise<UpdateResult> {
        return await this.customerRepository.update(id, customerData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.customerRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    