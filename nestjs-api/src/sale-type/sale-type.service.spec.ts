import { Test, TestingModule } from '@nestjs/testing';
import { SaleTypeService } from './sale-type.service';

describe('SaleTypeService', () => {
  let service: SaleTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleTypeService],
    }).compile();

    service = module.get<SaleTypeService>(SaleTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
