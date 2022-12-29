import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { FileDto } from "./files.dto";
import { File } from "./files.entity";
import { FileService } from "./files.service";

@Controller('file')
export class FileController {
  constructor(
    private readonly fileService: FileService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<File>> {
    return this.fileService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') fileId: number) {
    return this.fileService.listFileById(fileId);
  }

  @Post('create')
  async create(@Body() fileData: FileDto): Promise<any> {
    return this.fileService.create(fileData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() fileData: FileDto): Promise<any> {
    return this.fileService.update(id, fileData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.fileService.delete(id);
  }
}

