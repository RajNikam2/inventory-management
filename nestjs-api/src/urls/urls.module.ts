import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlController } from './urls.controller';
import { Url } from './urls.entity';
import { UrlService } from './urls.service';

@Module({
  imports:[TypeOrmModule.forFeature([Url])],
  controllers: [UrlController],
  providers: [UrlService],
  exports:[UrlService]
})
export class UrlModule {}
