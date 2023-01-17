import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ReminderDto } from "./reminder.dto";
import { Reminder } from "./reminder.entity";


@Injectable()
export class ReminderService {
    constructor(
        @InjectRepository(Reminder) private reminderRepository: Repository<Reminder>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Reminder>> {
        return paginate(query, this.reminderRepository, {
            sortableColumns: ['name', 'action'],
            // relations: ['or'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['name', 'action'],
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
       try {
            return await this.reminderRepository.save(reminderData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, reminderData: ReminderDto): Promise<UpdateResult> {
       try {
            return await this.reminderRepository.update(id, reminderData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.reminderRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





