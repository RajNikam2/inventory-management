import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { OrderDto } from "src/orders/orders.dto";
import { Order } from "src/orders/orders.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { OrderItemDto } from "./order-item.dto";
import { OrderItem } from "./order-item.entity";


@Injectable()
export class OrderItemService {
    constructor(
        @InjectRepository(OrderItem) private orderItemRepository: Repository<OrderItem>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<OrderItem>> {
        return paginate(query, this.orderItemRepository, {
            sortableColumns: ['unit'],
            relations:['product',/* 'order' */],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['unit'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listorderItemById(id: any) {
        return this.orderItemRepository.findOne({
            where: { id: id }
        });
    }

    async create(orderItemData: OrderItemDto): Promise<OrderItemDto> {
        try {
            return await this.orderItemRepository.save(orderItemData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, orderItemData: OrderItemDto): Promise<UpdateResult> {

        try {
            return await this.orderItemRepository.update(id, orderItemData);
        } catch (err) {
            throw new BadRequestException(err.message)
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.orderItemRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





