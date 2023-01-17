import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ShipmentByDto } from "./shipment-by.dto";
import { ShipmentBy } from "./shipment-by.entity";


@Injectable()
export class ShipmentByService {
    constructor(
        @InjectRepository(ShipmentBy) private shipmentbyRepository: Repository<ShipmentBy>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<ShipmentBy>> {
        return paginate(query, this.shipmentbyRepository, {
            sortableColumns: ['name'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['name'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listShipmentById(id: any) {
        return this.shipmentbyRepository.findOne({
            where: { id: id }
        });
    }

    async create(shipmentbyData: ShipmentByDto): Promise<ShipmentByDto> {
       try {
            return await this.shipmentbyRepository.save(shipmentbyData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, shipmentbyData: ShipmentByDto): Promise<UpdateResult> {
       try {
            return await this.shipmentbyRepository.update(id, shipmentbyData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.shipmentbyRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





