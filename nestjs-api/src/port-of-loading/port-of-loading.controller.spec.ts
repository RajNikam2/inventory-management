import { Test, TestingModule } from '@nestjs/testing';
import { PortOfLoadingController } from './port-of-loading.controller';
import { PortOfLoadingService } from './port-of-loading.service';

describe('PortOfLoadingController', () => {
  let controller: PortOfLoadingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortOfLoadingController],
      providers: [PortOfLoadingService],
    }).compile();

    controller = module.get<PortOfLoadingController>(PortOfLoadingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
