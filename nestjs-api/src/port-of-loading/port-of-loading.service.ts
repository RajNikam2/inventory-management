import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { PortOfLoadingDto } from "./port-of-loading.dto";
import { PortOfLoading } from "./port-of-loading.entity";


@Injectable()
export class PortOfLoadingService {
    constructor(
        @InjectRepository(PortOfLoading) private portofLoadingRepository: Repository<PortOfLoading>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<PortOfLoading>> {
        return paginate(query, this.portofLoadingRepository, {
            sortableColumns: ['loading_port'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['loading_port'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listloadingPortById(id: any) {
        return this.portofLoadingRepository.findOne({
            where: { id: id }
        });
    }

    async create(portofloadingData: PortOfLoadingDto): Promise<PortOfLoadingDto> {
       try {
            return await this.portofLoadingRepository.save(portofloadingData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, portofloadingData: PortOfLoadingDto): Promise<UpdateResult> {
       try {
            return await this.portofLoadingRepository.update(id, portofloadingData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.portofLoadingRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





