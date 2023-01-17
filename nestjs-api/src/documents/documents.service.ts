import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { DocumentDto } from "./documents.dto";
import { Document } from "./documents.entity";


@Injectable()
export class DocumentService {
    constructor(
        @InjectRepository(Document) private documentRepository: Repository<Document>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Document>> {
        return paginate(query, this.documentRepository, {
            sortableColumns: ['courier_service','tracking_referance','send_date','send_to','recieved_by','doc_id','date','comments'],
            relations: [/* 'order' */,'shipment'],
            defaultSortBy: [['id', 'ASC',]],
            searchableColumns: ['courier_service','tracking_referance','send_date','send_to','recieved_by','doc_id','date','comments'],
            // filterableColumns: {
            // 'order.id':[FilterOperator.EQ],
            // 'shipment.id':[FilterOperator.EQ]
            // }
        })
    }

    async listDocumentById(id: any) {
        return this.documentRepository.findOne({
            where: { id: id }
        });
    }

    async create(documentData: DocumentDto ): Promise<DocumentDto> {
      try {
            return await this.documentRepository.save(documentData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, documentData: DocumentDto): Promise<UpdateResult> {
       try {
            return await this.documentRepository.update(id, documentData);
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.documentRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





