import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CommentDto} from "./comments.dto";
import { Comment } from "./comments.entity";


@Injectable()
export class CommentService{
    constructor(
        @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Comment>> {
        return paginate(query, this.commentRepository, {
            sortableColumns: ['comments'],
            relations:['order'],
            defaultSortBy: [['id','ASC']],   
            searchableColumns: ['action'],
            // filterableColumns: {
            //     address: [FilterOperator.GTE, FilterOperator.LTE],
            // }
        })
    }
    
    async listCommentById(id: any) {
        return this.commentRepository.findOne({
            where: { id: id }
        });
    }

    async create(commentData: CommentDto): Promise<CommentDto> {
        return await this.commentRepository.save(commentData);
    }

    async update(id, commentData: CommentDto): Promise<UpdateResult> {
        return await this.commentRepository.update(id, commentData);
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.commentRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





    