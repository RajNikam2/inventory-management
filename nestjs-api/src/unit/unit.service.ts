import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { UnitDto } from "./unit.dto";
import { Unit } from "./unit.entity";


@Injectable()
export class UnitService{
    constructor(
        @InjectRepository(Unit) private unitRepository: Repository<Unit>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Unit>> {
        return paginate(query, this.unitRepository, {
            sortableColumns: ['unit'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['unit'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listUnitById(id: any) {
        return this.unitRepository.findOne({
            where: { id: id }
        });
    }

    async create(unitData: UnitDto): Promise<UnitDto> {
        return await this.unitRepository.save(unitData);
    }

    async update(id, unitData: UnitDto): Promise<UpdateResult> {
        return await this.unitRepository.update(id, unitData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.unitRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    