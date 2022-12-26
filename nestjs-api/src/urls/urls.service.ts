import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { UrlDto } from "./urls.dto";
import { Url } from "./urls.entity";


@Injectable()
export class UrlService{
    constructor(
        @InjectRepository(Url) private urlRepository: Repository<Url>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Url>> {
        return paginate(query, this.urlRepository, {
            sortableColumns: ['entityType','url','entityId'],
            relations: [],
            defaultSortBy: [['id','DESC']],
            searchableColumns: ['entityType','url','entityId'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listUrlById(id: any) {
        return this.urlRepository.findOne({
            where: { id: id }
        });
    }

    async create(urlData: UrlDto): Promise<UrlDto> {
        return await this.urlRepository.save(urlData);
    }

    async update(id, urlData: UrlDto): Promise<UpdateResult> {
        return await this.urlRepository.update(id, urlData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.urlRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    