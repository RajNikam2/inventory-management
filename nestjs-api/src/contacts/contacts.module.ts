import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contacts.controller';
import { Contact } from './contacts.entity';
import { ContactService } from './contacts.service';

@Module({
  imports:[TypeOrmModule.forFeature([Contact])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactsModule {}
