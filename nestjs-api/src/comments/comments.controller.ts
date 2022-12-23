import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { CommentDto } from "./comments.dto";
import { Comment } from "./comments.entity";
import { CommentService } from "./comments.service";


@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Comment>> {
    return this.commentService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') commentId: number) {
    return this.commentService.listCommentById(commentId);
  }

  @Post('create')
  async create(@Body() commentData: CommentDto): Promise<any> {
    return this.commentService.create(commentData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() commentData: CommentDto): Promise<any> {
    return this.commentService.update(id, commentData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.commentService.delete(id);
  }
}

