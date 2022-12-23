import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contacts.controller';
import { ContactService } from './contacts.service';

describe('ContactsController', () => {
  let controller: ContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [ContactService],
    }).compile();

    controller = module.get<ContactController>(ContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
