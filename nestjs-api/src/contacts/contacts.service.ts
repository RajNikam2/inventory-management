import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { CustomerDto } from "src/customer/customer.dto";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ContactDto } from "./contacts.dto";
import { Contact } from "./contacts.entity";


@Injectable()
export class ContactService{
    constructor(
        @InjectRepository(Contact) private contactRepository: Repository<Contact>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Contact>> {
        return paginate(query, this.contactRepository, {
            sortableColumns: ['entityId','entityType','contact_person','position','mail','phone'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['entityId','entityType','contact_person','position','mail','phone']
        })
    }

    async listCustomerById(id: any) {
        return this.contactRepository.findOne({
            where: { id: id }
        });
    }

    async create(contactData: ContactDto): Promise<ContactDto> {
        return await this.contactRepository.save(contactData);
    }

    async update(id, contactData: ContactDto): Promise<UpdateResult> {
        return await this.contactRepository.update(id, contactData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.contactRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    