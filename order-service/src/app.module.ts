import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderCreationModule } from './order-creation/order-creation.module';
import { OrderRetrievalModule } from './order-retrieval/order-retrieval.module';
import { OrderCancellationModule } from './order-cancellation/order-cancellation.module';

@Module({
  imports: [OrderCreationModule, OrderRetrievalModule, OrderCancellationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
