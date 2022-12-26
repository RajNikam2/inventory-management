import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CommissionDto } from "./commission.dto";
import { Commission } from "./commission.entity";


@Injectable()
export class CommissionService{
    constructor(
        @InjectRepository(Commission) private commissionRepository: Repository<Commission>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Commission>> {
        return paginate(query, this.commissionRepository, {
            sortableColumns: ['amount','bl','commission','invoice','percentage'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['amount','bl','commission','invoice','percentage'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listCommissionById(id: any) {
        return this.commissionRepository.findOne({
            where: { id: id }
        });
    }

    async create(commissionData: CommissionDto): Promise<CommissionDto> {
        return await this.commissionRepository.save(commissionData);
    }

    async update(id, commissionData: CommissionDto): Promise<UpdateResult> {
        return await this.commissionRepository.update(id, commissionData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.commissionRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    