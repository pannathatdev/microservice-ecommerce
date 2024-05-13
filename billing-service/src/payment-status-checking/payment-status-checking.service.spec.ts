import { Test, TestingModule } from '@nestjs/testing';
import { PaymentStatusCheckingService } from './payment-status-checking.service';

describe('PaymentStatusCheckingService', () => {
  let service: PaymentStatusCheckingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentStatusCheckingService],
    }).compile();

    service = module.get<PaymentStatusCheckingService>(PaymentStatusCheckingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
