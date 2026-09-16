import { PaymentProvider } from '../payment.types';

/**
 * Integración Stripe — solo usar claves públicas en el frontend.
 * El secreto (STRIPE_SECRET_KEY) debe vivir exclusivamente en el backend.
 */
export class StripePaymentProvider implements PaymentProvider {
  readonly id = 'stripe' as const;

  constructor(private readonly publicKey: string) {}

  async createCheckout(): Promise<never> {
    void this.publicKey;
    throw new Error(
      'Stripe aún no está conectado. Implementa el endpoint de checkout en el backend y usa solo la clave pública aquí.',
    );
  }
}
