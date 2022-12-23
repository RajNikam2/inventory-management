import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { sulpplierDto} from "./suppliers.dto";
import { Supplier } from "./suppliers.entity";


@Injectable()
export class SupplierService{
    constructor(
        @InjectRepository(Supplier) private supplierRepository: Repository<Supplier>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Supplier>> {
        return paginate(query, this.supplierRepository, {
            sortableColumns: ['organization','supplier_type','address'],
            defaultSortBy: [['id','DESC']],
            searchableColumns: ['organization','supplier_type','address'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listsupplierById(id: any) {
        return this.supplierRepository.findOne({
            where: { id: id }
        });
    }

    async create(supplierData: sulpplierDto): Promise<sulpplierDto> {
        return await this.supplierRepository.save(supplierData);
    }

    async update(id, supplierData: sulpplierDto): Promise<UpdateResult> {
        return await this.supplierRepository.update(id, supplierData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.supplierRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    