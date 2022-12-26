import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileController } from './files.controller';
import { File } from './files.entity';
import { FileService } from './files.service';

@Module({
  imports:[TypeOrmModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService]
})
export class FilesModule {}
