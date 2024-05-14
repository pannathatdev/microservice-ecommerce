import { Test, TestingModule } from '@nestjs/testing';
import { OrderCancellationService } from './order-cancellation.service';

describe('OrderCancellationService', () => {
  let service: OrderCancellationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderCancellationService],
    }).compile();

    service = module.get<OrderCancellationService>(OrderCancellationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
