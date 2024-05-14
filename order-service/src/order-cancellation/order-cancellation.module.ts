import { Module } from '@nestjs/common';
import { OrderCancellationController } from './order-cancellation.controller';
import { OrderCancellationService } from './order-cancellation.service';

@Module({
  controllers: [OrderCancellationController],
  providers: [OrderCancellationService]
})
export class OrderCancellationModule {}
