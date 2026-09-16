import { EsotericService } from '../../models/service.model';

export type PaymentProviderId = 'stripe' | 'mercadopago' | 'paypal';

export interface CheckoutRequest {
  service: EsotericService;
  customerEmail?: string;
  successUrl: string;
  cancelUrl: string;
}

export interface CheckoutSession {
  url: string;
  provider: PaymentProviderId;
}

export interface PaymentProvider {
  readonly id: PaymentProviderId;
  createCheckout(request: CheckoutRequest): Promise<CheckoutSession>;
}
