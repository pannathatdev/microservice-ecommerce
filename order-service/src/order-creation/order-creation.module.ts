import { Module } from '@nestjs/common';
import { OrderCreationController } from './order-creation.controller';
import { OrderCreationService } from './order-creation.service';

@Module({
  controllers: [OrderCreationController],
  providers: [OrderCreationService]
})
export class OrderCreationModule {}
