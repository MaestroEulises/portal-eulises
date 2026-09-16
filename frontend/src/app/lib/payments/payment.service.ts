import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { siteConfig } from '../../config/site';
import { WhatsAppService } from '../../services/whatsapp.service';
import { CheckoutRequest } from './payment.types';

interface BackendCheckoutResponse {
  ok: boolean;
  configured: boolean;
  provider: string;
  url: string | null;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly http = inject(HttpClient);
  private readonly whatsapp = inject(WhatsAppService);

  isEnabled(): boolean {
    return siteConfig.payments.enabled && siteConfig.payments.provider !== 'none';
  }

  async startCheckout(request: CheckoutRequest): Promise<void> {
    if (!this.isEnabled()) {
      this.whatsapp.openForService(request.service.id);
      return;
    }

    try {
      const response = await firstValueFrom(
        this.http.post<BackendCheckoutResponse>('/api/payments/checkout', {
          serviceId: request.service.id,
          serviceName: request.service.name,
          amount: request.service.price,
          currency: request.service.currency,
          customerEmail: request.customerEmail ?? '',
          successUrl: request.successUrl,
          cancelUrl: request.cancelUrl,
        }),
      );

      if (response.url) {
        window.location.assign(response.url);
        return;
      }
    } catch {
      // Si el backend no responde, caemos a WhatsApp.
    }

    this.whatsapp.openForService(request.service.id);
  }
}
