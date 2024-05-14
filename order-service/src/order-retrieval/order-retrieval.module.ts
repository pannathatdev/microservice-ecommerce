import { Module } from '@nestjs/common';
import { OrderRetrievalController } from './order-retrieval.controller';
import { OrderRetrievalService } from './order-retrieval.service';

@Module({
  controllers: [OrderRetrievalController],
  providers: [OrderRetrievalService]
})
export class OrderRetrievalModule {}
