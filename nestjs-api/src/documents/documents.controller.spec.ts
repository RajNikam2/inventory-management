import { Test, TestingModule } from '@nestjs/testing';
import { DocumentController } from './documents.controller';
import { DocumentService } from './documents.service';

describe('DocumentsController', () => {
  let controller: DocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentController],
      providers: [DocumentService],
    }).compile();

    controller = module.get<DocumentController>(DocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
