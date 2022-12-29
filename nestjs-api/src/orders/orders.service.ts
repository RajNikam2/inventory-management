import { Body, Delete, Injectable, NotFoundException, Param, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Comment } from 'src/comments/comments.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { OrderDto } from './orders.dto';
import { Order } from './orders.entity';


@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>,
    ) { }

    public findAll(query: PaginateQuery): Promise<Paginated<Order>> {
        return paginate(query, this.orderRepository, {
            sortableColumns: ['id', 'advance_balance', 'advance_payment', 'order_date'],
            defaultSortBy: [['id', 'DESC']],
            searchableColumns: ['id', 'advance_balance', 'advance_payment', 'order_date'],

        })
    }

    public findOrderById(id: any) {
        return this.orderRepository.findOne({
            where: { id: id }
        });
    }

    async create(orderData: OrderDto): Promise<OrderDto> {
        return await this.orderRepository.save(orderData);
    }

    async update(id, or: OrderDto): Promise<UpdateResult> {
        return await this.orderRepository.update(id, or);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.orderRepository.delete(id);
    }

    async findOrderComment(oid: any) {
        return await this.orderRepository.find({
            where:{
                id: oid
            }
        });
    }

    async findOrderReminder(oid: any) {
        return await this.orderRepository.findOne({
            where:{
                id: oid
            },
            relations:[
                'reminder',
    
            ]
        });
    }

    async findOrderFile(oid: any) {
        return await this.orderRepository.findOne({
            where:{
                id: oid
            },
            relations:[
                'file',
    
            ]
        });
    }

    async findOrderShipment(oid: any) {
        return await this.orderRepository.findOne({
            where:{
                id: oid
            },
            relations:[
                'shipment',
    
            ]
        });
    }

    async findOrderPayment(oid: any) {
        return await this.orderRepository.findOne({
            where:{
                id: oid
            },
            relations:[
                'payment',
    
            ]
        });
    }


    async findOrderCommission(oid: any) {
        return await this.orderRepository.findOne({
            where:{
                id: oid
            },
            relations:[
                'commission',
    
            ]
        });
    }

    async findOrderDocument(oid: any) {
        return await this.orderRepository.findOne({
            where:{
                id: oid
            },
            relations:[
                'document',
    
            ]
        });
    }

    async findOrderItem(oid: any) {
        return await this.orderRepository.findOne({
            where:{
                id: oid
            },
            relations:[
                'orderItem',
    
            ]
        });
    }
}





