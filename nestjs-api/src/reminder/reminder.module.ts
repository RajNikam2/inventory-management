import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReminderController } from './reminder.controller';
import { Reminder } from './reminder.entity';
import { ReminderService } from './reminder.service';

@Module({
  imports:[TypeOrmModule.forFeature([Reminder])],
  controllers: [ReminderController],
  providers: [ReminderService],
  exports:[ReminderService]
})
export class ReminderModule {}
