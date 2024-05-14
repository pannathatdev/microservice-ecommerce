import { Test, TestingModule } from '@nestjs/testing';
import { OrderRetrievalService } from './order-retrieval.service';

describe('OrderRetrievalService', () => {
  let service: OrderRetrievalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderRetrievalService],
    }).compile();

    service = module.get<OrderRetrievalService>(OrderRetrievalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
