import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceGenerationModule } from './invoice-generation/invoice-generation.module';
import { PaymentManagementModule } from './payment-management/payment-management.module';
import { PaymentStatusCheckingModule } from './payment-status-checking/payment-status-checking.module';

@Module({
  imports: [InvoiceGenerationModule, PaymentManagementModule, PaymentStatusCheckingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
