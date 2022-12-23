import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { OrderDto } from "./orders.dto";
import { Order } from "./orders.entity";


@Injectable()
export class OrderService{
    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Order>> {
        return paginate(query, this.orderRepository, {
            sortableColumns: ['advance_balance','advance_payment','order_date'],
            relations: ['teamMember','division','country','region','supplier','customer','saletype','paymentTerm','deliveryTerm','deliveryTime','payments'],
            defaultSortBy: [['id','DESC']],
            searchableColumns: ['advance_balance'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listOrderById(id: any) {
        return this.orderRepository.findOne({
            where: { id: id }
        });
    }

    async create(orderData: OrderDto): Promise<OrderDto> {
        return await this.orderRepository.save(orderData);
    }

    async update(id, orderData: OrderDto): Promise<UpdateResult> {
        return await this.orderRepository.update(id, orderData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.orderRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    