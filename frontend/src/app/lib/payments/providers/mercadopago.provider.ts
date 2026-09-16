import { PaymentProvider } from '../payment.types';

/**
 * Integración Mercado Pago — las credenciales secretas no deben exponerse al navegador.
 */
export class MercadoPagoPaymentProvider implements PaymentProvider {
  readonly id = 'mercadopago' as const;

  constructor(private readonly publicKey: string) {}

  async createCheckout(): Promise<never> {
    void this.publicKey;
    throw new Error(
      'Mercado Pago aún no está conectado. Crea la preferencia de pago en el servidor.',
    );
  }
}
