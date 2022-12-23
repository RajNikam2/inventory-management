import { Module } from '@nestjs/common';
import { DestinationPortService } from './destination-port.service';
import { DestinationPortController } from './destination-port.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationPort } from './destination-port.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DestinationPort])],
  controllers: [DestinationPortController],
  providers: [DestinationPortService]
})
export class DestinationPortModule {}
