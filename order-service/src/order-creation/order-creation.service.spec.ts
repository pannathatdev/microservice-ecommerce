import { Test, TestingModule } from '@nestjs/testing';
import { OrderCreationService } from './order-creation.service';

describe('OrderCreationService', () => {
  let service: OrderCreationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderCreationService],
    }).compile();

    service = module.get<OrderCreationService>(OrderCreationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
