import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ShipmentDto } from "./shipment.dto";
import { Shipment } from "./shipment.entity";


@Injectable()
export class ShipmentService{
    constructor(
        @InjectRepository(Shipment) private shipmentRepository: Repository<Shipment>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Shipment>> {
        return paginate(query, this.shipmentRepository, {
            sortableColumns: ['bl','eta','invoice_number','invoice_amount','balance_due_date','ex_work_value','commission_value','container_number'],
            relations:['order','portOfLoding','destinationPort','shipmentBy','shppingLine'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['bl','eta','invoice_number','invoice_amount','balance_due_date','ex_work_value','commission_value','container_number'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listShipmentById(id: any) {
        return this.shipmentRepository.findOne({
            where: { id: id }
        });
    }

    async create(shipmentData: ShipmentDto): Promise<ShipmentDto> {
        return await this.shipmentRepository.save(shipmentData);
    }

    async update(id, shipmentData: ShipmentDto): Promise<UpdateResult> {
        return await this.shipmentRepository.update(id, shipmentData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.shipmentRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    