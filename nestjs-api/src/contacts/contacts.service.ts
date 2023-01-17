import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { CustomerDto } from "src/customer/customer.dto";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ContactDto } from "./contacts.dto";
import { Contact } from "./contacts.entity";


@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact) private contactRepository: Repository<Contact>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Contact>> {
        return paginate(query, this.contactRepository, {
            sortableColumns: ['entityType', 'contact_person', 'position', 'mail', 'phone'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['entityType', 'contact_person', 'position', 'mail', 'phone']
        })
    }

    async listCustomerById(id: any) {
        return this.contactRepository.findOne({
            where: { id: id }
        });
    }

    async create(contactData: ContactDto): Promise<ContactDto> {
       try {
            return await this.contactRepository.save(contactData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, contactData: ContactDto): Promise<UpdateResult> {
       try {
            return await this.contactRepository.update(id, contactData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.contactRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





