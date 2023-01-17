import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CommentDto } from "./comments.dto";
import { Comment } from "./comments.entity";


@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment) private commentRepository: Repository<Comment>
    ) { }

    public listAll(query: PaginateQuery): Promise<Paginated<Comment>> {
        return paginate(query, this.commentRepository, {
            sortableColumns: ['comment'],
            relations: ['order'],
            defaultSortBy: [['id','ASC']],
            searchableColumns: ['action'],
            // filterableColumns: {
            //     'order.id':[FilterOperator.EQ]
            // }
        })
    }

    async listCommentById(id: any) {
        return this.commentRepository.findOne({
            where: { id: id }
        });
    }

    async create(commentData: CommentDto): Promise<CommentDto> {
        try {
            return await this.commentRepository.save(commentData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async update(id, commentData: CommentDto): Promise<UpdateResult> {
        try {
            return await this.commentRepository.update(id, commentData);
        } catch (err) {
            throw new BadRequestException(err.message);
        }
    }

    async delete(id: any): Promise<DeleteResult> {
        const deleteResponse = await this.commentRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException(id);
        }
        return deleteResponse;
    }

}





