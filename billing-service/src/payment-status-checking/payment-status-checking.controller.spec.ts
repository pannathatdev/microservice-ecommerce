import { Test, TestingModule } from '@nestjs/testing';
import { PaymentStatusCheckingController } from './payment-status-checking.controller';

describe('PaymentStatusCheckingController', () => {
  let controller: PaymentStatusCheckingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentStatusCheckingController],
    }).compile();

    controller = module.get<PaymentStatusCheckingController>(PaymentStatusCheckingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
