import { Module } from '@nestjs/common';
import { PortOfLoadingService } from './port-of-loading.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortOfLoading } from './port-of-loading.entity';
import { PotOfLoadingController } from './port-of-loading.controller';

@Module({
  imports:[TypeOrmModule.forFeature([PortOfLoading])],
  controllers: [PotOfLoadingController],
  providers: [PortOfLoadingService]
})
export class PortOfLoadingModule {}
