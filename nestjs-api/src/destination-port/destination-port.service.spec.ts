import { Test, TestingModule } from '@nestjs/testing';
import { DestinationPortService } from './destination-port.service';

describe('DestinationPortService', () => {
  let service: DestinationPortService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinationPortService],
    }).compile();

    service = module.get<DestinationPortService>(DestinationPortService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
