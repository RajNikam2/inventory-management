import { BadRequestException, Body, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, PaginateConfig, Paginated, PaginateQuery } from "nestjs-paginate";
import { UrlService } from "src/urls/urls.service";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CustomerDto } from "./customer.dto";
import { Customer } from "./customer.entity";


@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
        private urlService: UrlService,

    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Customer>> {
        return paginate(query, this.customerRepository, {
            sortableColumns: ['organization', 'industry.name', 'country.name'],
            relations: ['industry','industry', 'country'],
            // relations:['urls'],
            defaultSortBy: [['organization','ASC']],
            searchableColumns: ['organization', 'address', 'industry', 'country', 'notes'],
            filterableColumns: {
                'country.name': [FilterOperator.EQ],
                'industry.name': [FilterOperator.EQ],
                'type.name': [FilterOperator.EQ]
            }
        })

    }
    async listCustomerById(id: any) {
        return this.customerRepository.findOneOrFail({
            where: { id: id },
            relations: [
                'industry', 'country', 'type'
            ]
        });
    }

    async create(customerData: CustomerDto): Promise<CustomerDto> {
        try {
            return await this.customerRepository.save(customerData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    
    async update(id, customerData: CustomerDto): Promise<UpdateResult> {
        try {
            return await this.customerRepository.update(id, customerData);
        } catch (err) {
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

    async findCountryByCustId(cid: any) {
        return await this.customerRepository.findOne({
            where: {
                id: cid
            },
            relations: [
                'country',

            ]
        });
    }

    async findIndustryByCustId(iid: any) {
        return await this.customerRepository.findOne({
            where: {
                id: iid
            },
            relations: [
                'industry',

            ]
        });
    }

}





