import { Module } from '@nestjs/common';
import { PaymentStatusCheckingController } from './payment-status-checking.controller';
import { PaymentStatusCheckingService } from './payment-status-checking.service';

@Module({
  controllers: [PaymentStatusCheckingController],
  providers: [PaymentStatusCheckingService]
})
export class PaymentStatusCheckingModule {}
