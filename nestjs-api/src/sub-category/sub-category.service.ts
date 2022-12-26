import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { SubCategoryDto } from "./sub-category.dto";
import { SubCategory } from "./sub-category.entity";


@Injectable()
export class SubCategoryService{
    constructor(
        @InjectRepository(SubCategory) private subcategoryRepository: Repository<SubCategory>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<SubCategory>> {
        return paginate(query, this.subcategoryRepository, {
            sortableColumns: ['subCategory'],
            relations:['category'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['subCategory'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listSubCategoryById(id: any) {
        return this.subcategoryRepository.findOne({
            where: { id: id }
        });
    }

    async create(subcategoryData: SubCategoryDto): Promise<SubCategoryDto> {
        return await this.subcategoryRepository.save(subcategoryData);
    }

    async update(id, subcategoryData: SubCategoryDto): Promise<UpdateResult> {
        return await this.subcategoryRepository.update(id, subcategoryData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.subcategoryRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    