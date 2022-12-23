import { Module } from '@nestjs/common';
import { PortOfLoadingService } from './port-of-loading.service';
import { PortOfLoadingController } from './port-of-loading.controller';

@Module({
  controllers: [PortOfLoadingController],
  providers: [PortOfLoadingService]
})
export class PortOfLoadingModule {}
