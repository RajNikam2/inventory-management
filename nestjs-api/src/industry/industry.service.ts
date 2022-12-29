import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { IndustryDto } from "./industry.dto";
import { Industry } from "./industry.entity";


@Injectable()
export class IndustryService {
    constructor(
        @InjectRepository(Industry) private industryRepository: Repository<Industry>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Industry>> {
        return paginate(query, this.industryRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['name'],
            
        })
    }

 
    async listIndustryById(id: any) {
        return this.industryRepository.findOne({
            where: { id: id }
        });
    }
    async create(industryData: IndustryDto): Promise<IndustryDto> {
        try {
            return await this.industryRepository.save(industryData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, industryData: IndustryDto): Promise<UpdateResult> {

        try {
            return await this.industryRepository.update(id, industryData);
        } catch (err) {
            throw new BadRequestException(err.message)
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.industryRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





