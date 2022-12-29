import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { ReminderDto } from "./reminder.dto";
import { Reminder } from "./reminder.entity";
import { ReminderService } from "./reminder.service";

@Controller('reminder')
export class ReminderController {
  constructor(
    private readonly reminderService: ReminderService
  ) { }

  @Get()
  public listAll(@Paginate() query: PaginateQuery): Promise<Paginated<Reminder>> {
    return this.reminderService.listAll(query);
  }

  @Get('/:id')
  async listById(@Param('id') reminderId: number) {
    return this.reminderService.listReminderById(reminderId);
  }

  @Post('create')
  async create(@Body() reminderData: ReminderDto): Promise<any> {
    return this.reminderService.create(reminderData);
  }

  @Patch('update/:id')
  async update(@Param('id') id, @Body() reminderData: ReminderDto): Promise<any> {
    return this.reminderService.update(id, reminderData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id): Promise<any> {
    return this.reminderService.delete(id);
  }
}

