import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { DocumentDto } from "./documents.dto";
import { Document } from "./documents.entity";
import { DocumentService } from "./documents.service";

@Controller('document')
export class DocumentController {
  constructor(
    private readonly documentService: DocumentService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Document>> {
    return this.documentService.listAll(query);
  }


  @Get('/:id')
  async listById(@Param('id') documentId: number) {
    return this.documentService.listDocumentById(documentId);
  }

  @Post('create')
  async create(@Body() documentData: DocumentDto): Promise<any> {
    return this.documentService.create(documentData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() documentData: DocumentDto): Promise<any> {
    return this.documentService.update(id, documentData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.documentService.delete(id);
  }
}

