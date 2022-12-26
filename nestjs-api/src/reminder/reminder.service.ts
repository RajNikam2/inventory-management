import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ReminderDto } from "./reminder.dto";
import { Reminder } from "./reminder.entity";


@Injectable()
export class ReminderService{
    constructor(
        @InjectRepository(Reminder) private reminderRepository: Repository<Reminder>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Reminder>> {
        return paginate(query, this.reminderRepository, {
            sortableColumns: ['reminder','action'],
            relations:['order'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['reminder','action'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listReminderById(id: any) {
        return this.reminderRepository.findOne({
            where: { id: id }
        });
    }

    async create(reminderData: ReminderDto): Promise<ReminderDto> {
        return await this.reminderRepository.save(reminderData);
    }

    async update(id, reminderData: ReminderDto): Promise<UpdateResult> {
        return await this.reminderRepository.update(id, reminderData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.reminderRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    