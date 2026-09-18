import { Injectable } from '@angular/core';
import { WHATSAPP_NUMBER, siteConfig } from '../config/site';
import { getServiceById } from '../config/services';
import { tarotModalities, loveRituals } from '../data/services';

const SERVICE_MESSAGES: Record<string, string> = {
  'amarres-de-amor':
    '💖 Hola, Maestro Eulises.\n\nVengo desde la web y me interesa conocer más sobre los rituales espirituales de amor y armonización.\n\n🙏 ¿Podría orientarme sobre la mejor opción para mi situación? Gracias.',
  'tarot-del-amor':
    '🔮❤️ Hola, Maestro Eulises.\n\nMe gustaría reservar o saber más sobre el Tarot del Amor.\n\n✨ Quedo atento/a para coordinar la consulta. Gracias.',
  'limpieza-energetica':
    '✨🌿 Hola, Maestro Eulises.\n\nQuisiera información sobre la Limpieza Energética.\n\n🌙 ¿Me puede indicar disponibilidad y cómo se realiza la sesión? Gracias.',
  'ritual-de-proteccion':
    '🛡️✨ Hola, Maestro Eulises.\n\nMe interesa el Ritual de Protección y me gustaría conocer más detalles.\n\n🙏 Quedo atento/a a su orientación. Gracias.',
  'apertura-de-caminos':
    '🛤️🌟 Hola, Maestro Eulises.\n\nDeseo información sobre Apertura de Caminos.\n\n✨ ¿Podría contarme cómo funciona y cómo reservar? Gracias.',
  'prosperidad-y-abundancia':
    '💰✨ Hola, Maestro Eulises.\n\nMe gustaría saber más sobre el ritual de Prosperidad y Abundancia.\n\n🙏 Quedo atento/a a su respuesta. Gracias.',
  'lectura-de-cartas':
    '🃏🔮 Hola, Maestro Eulises.\n\nQuisiera reservar una lectura de cartas.\n\n✨ ¿Me indica horarios disponibles? Gracias.',
  'armonizacion-energetica':
    '🌸✨ Hola, Maestro Eulises.\n\nMe interesa la Armonización Energética y quisiera más información.\n\n🙏 Gracias de antemano.',
  'consultas-de-astrologia':
    '♈🌙 Hola, Maestro Eulises.\n\nDeseo reservar una consulta de astrología.\n\n✨ Quedo atento/a para coordinar. Gracias.',
  'interpretacion-espiritual':
    '🕊️✨ Hola, Maestro Eulises.\n\nMe gustaría una Interpretación Espiritual y conocer cómo se realiza.\n\n🙏 Gracias.',
  'consultas-personalizadas':
    '💬🌙 Hola, Maestro Eulises.\n\nBusco una consulta personalizada. Me gustaría contarle mi situación con calma y privacidad.\n\n🙏 ¿Podemos coordinar? Gracias.',
  'tarot-amor':
    '❤️🔮 Hola, Maestro Eulises.\n\nQuisiera reservar una Lectura de Tarot — Amor.\n\n✨ Quedo atento/a. Gracias.',
  'tarot-dinero':
    '💰🔮 Hola, Maestro Eulises.\n\nQuisiera reservar una Lectura de Tarot — Dinero.\n\n✨ Quedo atento/a. Gracias.',
  'tarot-trabajo':
    '💼🔮 Hola, Maestro Eulises.\n\nQuisiera reservar una Lectura de Tarot — Trabajo.\n\n✨ Quedo atento/a. Gracias.',
  'tarot-camino':
    '🌙🔮 Hola, Maestro Eulises.\n\nQuisiera reservar una Lectura de Tarot — Camino personal.\n\n✨ Quedo atento/a. Gracias.',
  'tarot-general':
    '🔮✨ Hola, Maestro Eulises.\n\nQuisiera reservar una Lectura de Tarot de 30 minutos.\n\n🙏 Quedo atento/a. Gracias.',
  'ritual-armonizacion':
    '💞✨ Hola, Maestro Eulises.\n\nQuiero consultar mi situación y conocer el ritual de armonización.\n\n🙏 Gracias.',
  'ritual-reconciliacion':
    '🕊️💖 Hola, Maestro Eulises.\n\nQuiero consultar mi situación y conocer el ritual de reconciliación.\n\n🙏 Gracias.',
  'ritual-intencion-amorosa':
    '💗🌙 Hola, Maestro Eulises.\n\nQuiero consultar mi situación y conocer el ritual de intención amorosa.\n\n🙏 Gracias.',
  general: siteConfig.whatsapp.welcomeMessage ?? siteConfig.whatsapp.defaultMessage,
  contacto:
    '📩✨ Hola, Maestro Eulises.\n\nCompleté el formulario en la web y me gustaría continuar la consulta por WhatsApp.\n\n🙏 Quedo atento/a a su respuesta. Gracias.',
};

@Injectable({ providedIn: 'root' })
export class WhatsAppService {
  readonly number = WHATSAPP_NUMBER;

  messageFor(id?: string): string {
    if (!id) {
      return siteConfig.whatsapp.welcomeMessage ?? siteConfig.whatsapp.defaultMessage;
    }

    if (SERVICE_MESSAGES[id]) {
      return SERVICE_MESSAGES[id];
    }

    const service = getServiceById(id);
    if (service) {
      return `✨ Hola, Maestro Eulises.\n\nMe gustaría obtener información sobre ${service.name}.\n\n🙏 Quedo atento/a. Gracias.`;
    }

    const tarot = tarotModalities.find((item) => item.id === id);
    if (tarot) {
      return `🔮✨ Hola, Maestro Eulises.\n\nMe gustaría reservar ${tarot.name}.\n\n🙏 Quedo atento/a. Gracias.`;
    }

    const ritual = loveRituals.find((item) => item.id === id);
    if (ritual) {
      return `💖✨ Hola, Maestro Eulises.\n\nQuiero consultar mi situación en relación con: ${ritual.title}.\n\n🙏 Gracias.`;
    }

    return siteConfig.whatsapp.welcomeMessage ?? siteConfig.whatsapp.defaultMessage;
  }

  /** Enlace de bienvenida al entrar (botón flotante, header, hero…). */
  welcomeUrl(): string {
    return this.url(siteConfig.whatsapp.welcomeMessage ?? siteConfig.whatsapp.defaultMessage);
  }

  url(message?: string): string {
    const phone = String(this.number).replace(/\D/g, '');
    const text = encodeURIComponent(message ?? this.messageFor());
    // Formato oficial de Meta; suele comportarse mejor que wa.me en escritorio.
    return `https://api.whatsapp.com/send/?phone=${phone}&text=${text}&type=phone_number&app_absent=0`;
  }

  urlFor(id?: string): string {
    return this.url(this.messageFor(id));
  }

  open(message?: string): void {
    window.open(this.url(message), '_blank', 'noopener,noreferrer');
  }

  openForService(id?: string): void {
    this.open(this.messageFor(id));
  }
}
