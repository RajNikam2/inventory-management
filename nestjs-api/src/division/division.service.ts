import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { DivistionDto } from "./division.dto";
import { Division } from "./division.entity";


@Injectable()
export class DivisionService {
    constructor(
        @InjectRepository(Division) private divisionRepository: Repository<Division>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Division>> {
        return paginate(query, this.divisionRepository, {
            sortableColumns: ['name'],
            relations: [],
            defaultSortBy: [['id', 'ASC',]],
            searchableColumns: [],
            // filterableColumns: {
            //     'country.id':[FilterOperator.EQ]
            // }
        })
    }

    async listDivisionById(id: any) {
        return this.divisionRepository.findOne({
            where: { id: id }
        });
    }

    async create(divisionData: DivistionDto): Promise<DivistionDto> {
      try {
            return await this.divisionRepository.save(divisionData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, divisionData: DivistionDto): Promise<UpdateResult> {
       try {
            return await this.divisionRepository.update(id, divisionData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.divisionRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





