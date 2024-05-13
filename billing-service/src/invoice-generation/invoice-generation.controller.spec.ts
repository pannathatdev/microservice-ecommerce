import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceGenerationController } from './invoice-generation.controller';

describe('InvoiceGenerationController', () => {
  let controller: InvoiceGenerationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceGenerationController],
    }).compile();

    controller = module.get<InvoiceGenerationController>(InvoiceGenerationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
