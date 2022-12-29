import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { DeliveryTermDto } from "./delivery-term.dto";
import { DeliveryTerm } from "./delivery-term.entity";


@Injectable()
export class DeliveryTermService {
    constructor(
        @InjectRepository(DeliveryTerm) private deliveryTermRepository: Repository<DeliveryTerm>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<DeliveryTerm>> {
        return paginate(query, this.deliveryTermRepository, {
            sortableColumns: ['deliveryTerm'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['deliveryTerm'],
            
        })
    }

    async listdeliveryTermById(id: any) {
        return this.deliveryTermRepository.findOne({
            where: { id: id }
        });
    }

    async create(deliveryTermData: DeliveryTermDto): Promise<DeliveryTermDto> {
       try {
            return await this.deliveryTermRepository.save(deliveryTermData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, deliveryTermData: DeliveryTermDto): Promise<UpdateResult> {
       try {
            return await this.deliveryTermRepository.update(id, deliveryTermData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.deliveryTermRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





