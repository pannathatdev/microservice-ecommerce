import { Test, TestingModule } from '@nestjs/testing';
import { OrderCreationController } from './order-creation.controller';

describe('OrderCreationController', () => {
  let controller: OrderCreationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderCreationController],
    }).compile();

    controller = module.get<OrderCreationController>(OrderCreationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
