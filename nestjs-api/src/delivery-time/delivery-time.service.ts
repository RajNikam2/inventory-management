import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { DeliveryTimeDto } from "./delivery-time.dto";
import { DeliveryTime } from "./delivery-time.entity";

@Injectable()
export class DeliveryTimeService {
    constructor(
        @InjectRepository(DeliveryTime) private deliveryTimeRepository: Repository<DeliveryTime>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<DeliveryTime>> {
        return paginate(query, this.deliveryTimeRepository, {
            sortableColumns: ['time'],
            defaultSortBy: [['id', 'DESC']],
            searchableColumns: ['time'],
        })
    }

    async listDeliveryTimeById(id: any) {
        return this.deliveryTimeRepository.findOne({
            where: { id: id }
        });
    }

    async create(deliveryTimeData: DeliveryTimeDto): Promise<DeliveryTimeDto> {
       try {
            return await this.deliveryTimeRepository.save(deliveryTimeData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, deliveryTimeData: DeliveryTimeDto): Promise<UpdateResult> {
      try {
            return await this.deliveryTimeRepository.update(id, deliveryTimeData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.deliveryTimeRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





