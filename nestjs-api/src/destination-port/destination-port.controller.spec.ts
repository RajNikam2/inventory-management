import { Test, TestingModule } from '@nestjs/testing';
import { DestinationPortController } from './destination-port.controller';
import { DestinationPortService } from './destination-port.service';

describe('DestinationPortController', () => {
  let controller: DestinationPortController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationPortController],
      providers: [DestinationPortService],
    }).compile();

    controller = module.get<DestinationPortController>(DestinationPortController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
