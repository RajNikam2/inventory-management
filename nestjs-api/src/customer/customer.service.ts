import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AnyARecord } from "dns";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { OrderDto } from "src/orders/orders.dto";
import { Order } from "src/orders/orders.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CustomerDto } from "./customer.dto";
import { Customer } from "./customer.entity";


@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer) private customerRepository: Repository<Customer>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Customer>> {
        return paginate(query, this.customerRepository, {
            sortableColumns: ['organization', 'address', 'notes'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['address',],
            filterableColumns: {
                'country.name': [FilterOperator.EQ],
                'industry.id':[FilterOperator.EQ]
            }
        })
    }

    async listCustomerById(id: any) {
        return this.customerRepository.findOne({
            where: { id: id }
        });
    }

    async create(customerData: CustomerDto): Promise<CustomerDto> {
       try {
            return await this.customerRepository.save(customerData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, customerData: CustomerDto): Promise<UpdateResult> {
        try{
            return await this.customerRepository.update(id, customerData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.customerRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





