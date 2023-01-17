import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ShippingLineDto } from "./shipping-line.dto";
import { ShippingLine } from "./shipping-line.entity";


@Injectable()
export class ShippingLineService {
    constructor(
        @InjectRepository(ShippingLine) private shippingLineRepository: Repository<ShippingLine>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<ShippingLine>> {
        return paginate(query, this.shippingLineRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['name'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listShippingLineById(id: any) {
        return this.shippingLineRepository.findOne({
            where: { id: id }
        });
    }

    async create(shippinglineData: ShippingLineDto): Promise<ShippingLineDto> {
      try{
            return await this.shippingLineRepository.save(shippinglineData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, shippinglineData: ShippingLineDto): Promise<UpdateResult> {
        try{
            return await this.shippingLineRepository.update(id, shippinglineData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.shippingLineRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





