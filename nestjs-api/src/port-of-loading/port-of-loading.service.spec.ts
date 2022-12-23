import { Test, TestingModule } from '@nestjs/testing';
import { PortOfLoadingService } from './port-of-loading.service';

describe('PortOfLoadingService', () => {
  let service: PortOfLoadingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortOfLoadingService],
    }).compile();

    service = module.get<PortOfLoadingService>(PortOfLoadingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
