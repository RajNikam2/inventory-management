import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndustryController } from './industry.controller';
import { Industry } from './industry.entity';
import { IndustryService } from './industry.service';

@Module({
  imports:[TypeOrmModule.forFeature([Industry])],
  controllers: [IndustryController],
  providers: [IndustryService],
  exports:[IndustryService]
})
export class IndustryModule {}
