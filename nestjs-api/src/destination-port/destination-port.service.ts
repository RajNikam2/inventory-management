import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { DestinationPortDto } from "./destination-port.dto";
import { DestinationPort } from "./destination-port.entity";


@Injectable()
export class DestinationPortService {
    constructor(
        @InjectRepository(DestinationPort) private destionationPortRepository: Repository<DestinationPort>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<DestinationPort>> {
        return paginate(query, this.destionationPortRepository, {
            sortableColumns: ['destination_port'],
            defaultSortBy: [['id', 'DESC',]],
            searchableColumns: ['destination_port'],
            // filterableColumns: {
            //     country:[FilterOperator.EQ]
            // }
        })
    }

    async listdestionationPortById(id: any) {
        return this.destionationPortRepository.findOne({
            where: { id: id }
        });
    }

    async create(destinationPortData: DestinationPortDto): Promise<DestinationPortDto> {
       try {
            return await this.destionationPortRepository.save(destinationPortData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, destinationPortData: DestinationPortDto): Promise<UpdateResult> {
        try{
            return await this.destionationPortRepository.update(id, destinationPortData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.destionationPortRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





