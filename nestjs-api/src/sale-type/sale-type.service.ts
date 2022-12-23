import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { SaleType } from "./sale-type.entity";


@Injectable()
export class SalteTypeService{
    constructor(
        @InjectRepository(SaleType) private saletypeRepository: Repository<SaleType>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<SaleType>> {
        return paginate(query, this.saletypeRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id','DESC']],
            searchableColumns: ['name'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listSaletypeById(id: any) {
        return this.saletypeRepository.findOne({
            where: { id: id }
        });
    }

    async create(saletypeData: SaleType): Promise<SaleType> {
        return await this.saletypeRepository.save(saletypeData);
    }

    async update(id, saletypeData: SaleType): Promise<UpdateResult> {
        return await this.saletypeRepository.update(id, saletypeData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.saletypeRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    