import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentController } from './documents.controller';
import { Document } from './documents.entity';
import { DocumentService } from './documents.service';

@Module({
  imports:[TypeOrmModule.forFeature([Document])],
  controllers: [DocumentController],
  providers: [DocumentService],
  exports:[DocumentService]
})
export class DocumentsModule {}
