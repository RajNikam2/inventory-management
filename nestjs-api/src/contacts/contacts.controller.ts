import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { ContactDto } from "./contacts.dto";
import { Contact } from "./contacts.entity";
import { ContactService } from "./contacts.service";

@Controller('contact')
export class ContactController {
  constructor(
    private readonly contactService: ContactService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Contact>> {
    return this.contactService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') contactId: number) {
    return this.contactService.listCustomerById(contactId);
  }

  @Post('create')
  async create(@Body() cuontactData: ContactDto): Promise<any> {
    return this.contactService.create(cuontactData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() contactData: ContactDto): Promise<any> {
    return this.contactService.update(id, contactData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.contactService.delete(id);
  }
}

