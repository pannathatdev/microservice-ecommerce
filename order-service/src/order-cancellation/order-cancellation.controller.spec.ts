import { Test, TestingModule } from '@nestjs/testing';
import { OrderCancellationController } from './order-cancellation.controller';

describe('OrderCancellationController', () => {
  let controller: OrderCancellationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderCancellationController],
    }).compile();

    controller = module.get<OrderCancellationController>(OrderCancellationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
