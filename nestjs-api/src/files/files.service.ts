import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { FileDto } from "./files.dto";
import { File } from "./files.entity";


@Injectable()
export class FileService{
    constructor(
        @InjectRepository(File) private fileRepository: Repository<File>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<File>> {
        return paginate(query, this.fileRepository, {
            sortableColumns: ['file_name','file_path','file_type','description'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['file_name','file_path','file_type','description'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }

    async listFileById(id: any) {
        return this.fileRepository.findOne({
            where: { id: id }
        });
    }

    async create(fileData: FileDto): Promise<FileDto> {
        return await this.fileRepository.save(fileData);
    }

    async update(id, fileData: FileDto): Promise<UpdateResult> {
        return await this.fileRepository.update(id, fileData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.fileRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    