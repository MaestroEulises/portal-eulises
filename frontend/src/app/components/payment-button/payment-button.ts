import { Component, inject, input } from '@angular/core';
import { siteConfig } from '../../config/site';
import { PaymentService } from '../../lib/payments';
import { EsotericService } from '../../models/service.model';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-payment-button',
  templateUrl: './payment-button.html',
})
export class PaymentButton {
  private readonly payments = inject(PaymentService);
  private readonly whatsapp = inject(WhatsAppService);

  readonly service = input.required<EsotericService>();
  readonly label = input('Consultar');

  async onClick(): Promise<void> {
    const service = this.service();
    if (!this.payments.isEnabled()) {
      this.whatsapp.openForService(service.id);
      return;
    }

    await this.payments.startCheckout({
      service,
      successUrl: `${siteConfig.url}/?pago=ok`,
      cancelUrl: `${siteConfig.url}/?pago=cancelado`,
    });
  }
}
