import { Test, TestingModule } from '@nestjs/testing';
import { OrderRetrievalController } from './order-retrieval.controller';

describe('OrderRetrievalController', () => {
  let controller: OrderRetrievalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderRetrievalController],
    }).compile();

    controller = module.get<OrderRetrievalController>(OrderRetrievalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
