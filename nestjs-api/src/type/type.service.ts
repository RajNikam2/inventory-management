import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { TypeDto } from "./type.dto";
import { Type } from "./type.entity";


@Injectable()
export class TypeService {
    constructor(
        @InjectRepository(Type) private typeRepository: Repository<Type>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Type>> {
        return paginate(query, this.typeRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['name']
        })
    }

    async listTypeById(id: any) {
        return this.typeRepository.findOne({
            where: { id: id }
        });
    }

    async create(typeData: TypeDto): Promise<TypeDto> {
        try {
            return await this.typeRepository.save(typeData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, typeData: TypeDto): Promise<UpdateResult> {
      try  {
            return await this.typeRepository.update(id, typeData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.typeRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





