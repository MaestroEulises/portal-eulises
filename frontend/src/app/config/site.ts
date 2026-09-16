export const siteConfig = {
  name: 'Maestro Eulises',
  legalName: 'Maestro Eulises',
  tagline: 'Esoterismo · Guía espiritual · Soluciones',
  taglineParts: ['Esoterismo', 'Guía espiritual', 'Soluciones'] as const,
  url: 'https://www.maestroeulises.com',
  locale: 'es',
  currency: 'USD',
  currencySymbol: '$',

  seo: {
    title: 'Maestro Eulises | Tarot, Rituales y Servicios Esotéricos',
    description:
      'Consultas de tarot, rituales espirituales, orientación esotérica y servicios personalizados. Atención privada y reservas online.',
    keywords:
      'tarot, rituales espirituales, servicios esotéricos, lectura de cartas, limpieza energética, astrología, consulta espiritual, Maestro Eulises',
    ogImage: '/images/og-maestro-eulises.png',
    twitterHandle: '@maestroeulises',
  },

  contact: {
    email: 'hola@maestroeulises.com',
    phoneDisplay: '',
    apiEndpoint: '/api/contact',
    formMinSubmitMs: 2500,
  },

  /**
   * Número de WhatsApp en formato internacional, sin + ni espacios.
   * Ejemplo: 573143681319
   */
  whatsapp: {
    number: '573143681319',
    defaultMessage:
      '✨ Hola, Maestro Eulises.\n\n🌙 Llego desde su página web.\n\n💫 ¿Buscas amor, tarot o limpieza?\n\n🙏 Quedo atento/a a su orientación. Gracias.',
    welcomeMessage:
      '✨ Hola, Maestro Eulises.\n\n🌙 Llego desde su página web.\n\n💫 ¿Buscas amor, tarot o limpieza?\n\n🙏 Quedo atento/a a su orientación. Gracias.',
    greetingName: 'Maestro Eulises',
  },

  social: {
    instagram: 'https://www.instagram.com/maestroeulises',
    facebook: 'https://www.facebook.com/maestroeulises',
    tiktok: 'https://www.tiktok.com/@maestroeulises',
  },

  colors: {
    ink: '#08070D',
    night: '#17102B',
    purple: '#6D28D9',
    violet: '#8B5CF6',
    gold: '#D4AF37',
    goldLight: '#F4D58D',
    cream: '#F8F5EF',
  },

  images: {
    logo: '/images/logo-maestro-eulises.png',
    portrait: '/images/retrato-maestro.png',
    hero: '/images/hero-luna-tarot.png',
    about: '/images/about-velas-tarot.png',
    tarot: '/images/tarot-mesa.png',
    love: '/images/ritual-amor.png',
    cleansing: '/images/limpieza-cristales.png',
    protection: '/images/proteccion-ritual.png',
    prosperity: '/images/prosperidad-abundancia.png',
    og: '/images/og-maestro-eulises.png',
  },

  payments: {
    enabled: false,
    provider: 'none' as 'none' | 'stripe' | 'mercadopago' | 'paypal',
    publicKey: '',
  },

  copy: {
    heroTitle: 'Descubre una nueva conexión con tu energía',
    heroSubtitle:
      'Consultas de tarot, rituales espirituales y acompañamiento esotérico personalizado para quienes buscan orientación, claridad y armonía.',
    trustLine: 'Consultas privadas · Atención personalizada · Reserva online',
    trustLineParts: ['Consultas privadas', 'Atención personalizada', 'Reserva online'] as const,
    servicesTitle: 'Servicios Esotéricos',
    servicesText: 'Elige la experiencia que mejor se adapte a lo que estás buscando.',
    loveTitle: 'Rituales de Amor y Reconciliación',
    loveText:
      'Explora nuestros rituales espirituales relacionados con el amor, los vínculos y la reconciliación. Cada consulta comienza con una conversación privada para comprender tu situación y recomendarte la alternativa que mejor se adapte a tus necesidades.',
    tarotTitle: 'Tarot: encuentra claridad en tus preguntas',
    processTitle: '¿Cómo funciona?',
    testimonialsTitle: 'Experiencias de nuestros clientes',
    aboutTitle: 'Maestro Eulises',
    aboutSubtitle: 'Un espacio para conectar contigo',
    aboutText:
      'Guía espiritual dedicado a prácticas esotéricas, tarot y acompañamiento personalizado. Su propósito es ofrecer consultas privadas en un ambiente respetuoso, discreto y cercano, para quienes buscan claridad, armonía y orientación.',
    aboutNote:
      'Trabajamos con un lenguaje de intención, reflexión y acompañamiento. Cada persona llega con una historia distinta; por eso la primera conversación es siempre privada y sin presión.',
    aboutRole: 'Esoterismo · Guía espiritual · Soluciones',
    aboutRoleParts: ['Esoterismo', 'Guía espiritual', 'Soluciones'] as const,
    ctaTitle: '¿Tienes una situación que quieres consultar?',
    ctaText: 'Cuéntanos qué estás viviendo y descubre qué servicio puede ser adecuado para ti.',
    legalDisclaimer:
      'Los servicios ofrecidos tienen carácter espiritual, esotérico y/o de entretenimiento y no garantizan resultados específicos. No sustituyen asesoramiento médico, psicológico, legal o financiero profesional.',
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Alias central del número de WhatsApp. */
export const WHATSAPP_NUMBER = siteConfig.whatsapp.number;

export function formatPrice(amount: number, from = false): string {
  const value = `${siteConfig.currencySymbol}${amount}`;
  return from ? `Desde ${value}` : value;
}

export function absoluteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
