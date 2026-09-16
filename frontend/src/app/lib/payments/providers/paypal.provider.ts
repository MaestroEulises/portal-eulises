import { PaymentProvider } from '../payment.types';

/**
 * Integración PayPal — el client secret no debe colocarse en el frontend.
 */
export class PayPalPaymentProvider implements PaymentProvider {
  readonly id = 'paypal' as const;

  constructor(private readonly publicKey: string) {}

  async createCheckout(): Promise<never> {
    void this.publicKey;
    throw new Error('PayPal aún no está conectado. Genera la orden de pago desde el backend.');
  }
}
