import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { UrlDto } from "./urls.dto";
import { Url } from "./urls.entity";


@Injectable()
export class UrlService {
    save: any;
    constructor(
        @InjectRepository(Url) private urlRepository: Repository<Url>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Url>> {
        return paginate(query, this.urlRepository, {
            sortableColumns: ['url'],
            // relations: ['customer','supplier'],
            defaultSortBy: [['id', 'DESC']],
            searchableColumns: ['url'],
            // filterableColumns: {
            //     entityType: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }


    async listUrlById(id: any) {
        return this.urlRepository.findOne({
            where: { id: id }
        });
    }

    async create(urlData: UrlDto): Promise<any> {
        try {
            return await this.urlRepository.save(urlData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, urlData: UrlDto): Promise<UpdateResult> {
        try {
            return await this.urlRepository.update(id, urlData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.urlRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }    

}


