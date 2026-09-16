import { siteConfig } from '../config/site';
import { EsotericService } from '../models/service.model';

const currency = siteConfig.currency;
const images = siteConfig.images;

export const services: EsotericService[] = [
  {
    id: 'amarres-de-amor',
    name: 'Amarres de Amor',
    description:
      'Rituales espirituales orientados a trabajar simbólicamente aspectos relacionados con el amor, la conexión y la intención personal.',
    longDescription:
      'Este acompañamiento comienza con una conversación privada para comprender tu situación afectiva. A partir de ahí, se recomienda una práctica espiritual simbólica orientada a la armonización, la reconciliación o la intención amorosa. No se garantiza ningún resultado concreto ni se pretende influir sobre la voluntad de otra persona: el foco está en tu claridad, tu intención y tu proceso personal.',
    includes: [
      'Conversación previa privada para entender tu situación',
      'Recomendación del ritual simbólico más adecuado',
      'Orientación sobre la intención y el enfoque espiritual',
      'Acompañamiento respetuoso sin presión ni promesas absolutas',
      'Seguimiento breve por WhatsApp según lo acordado',
    ],
    idealFor: [
      'Quienes buscan claridad emocional en un vínculo',
      'Personas que desean trabajar una intención amorosa de forma simbólica',
      'Quienes valoran un espacio discreto y sin juicios',
    ],
    modality: 'Consulta previa por WhatsApp, videollamada o chat',
    price: 89,
    priceFrom: true,
    currency,
    duration: 'Consulta previa + ritual simbólico',
    category: 'amor',
    image: images.love,
    active: true,
    featured: true,
    cta: 'Consultar',
    icon: 'heart',
  },
  {
    id: 'tarot-del-amor',
    name: 'Tarot del Amor',
    description:
      'Una lectura enfocada en relaciones, emociones, vínculos y posibles caminos personales.',
    longDescription:
      'La lectura de Tarot del Amor es un espacio privado para explorar emociones, dinámicas de pareja, vínculos y preguntas sobre tu vida afectiva. Las cartas se usan como herramienta de reflexión y orientación simbólica: no predicen un futuro fijo ni sustituyen tus decisiones. La sesión puede realizarse por videollamada o chat, con total discreción.',
    includes: [
      'Sesión privada de aproximadamente 30 minutos',
      'Preguntas enfocadas en amor, vínculos o emociones',
      'Interpretación clara y respetuosa de las cartas',
      'Espacio para aclarar dudas durante la lectura',
      'Atención por videollamada o chat',
    ],
    idealFor: [
      'Dudas sobre una relación o un posible reencuentro',
      'Necesidad de claridad emocional',
      'Quienes buscan orientación sin presión',
    ],
    modality: 'Videollamada o chat privado',
    price: 49,
    priceFrom: false,
    currency,
    duration: '30 minutos',
    category: 'tarot',
    image: images.tarot,
    active: true,
    featured: true,
    cta: 'Consultar',
    icon: 'sparkles',
  },
  {
    id: 'limpieza-energetica',
    name: 'Limpieza Energética',
    description:
      'Sesión espiritual enfocada en renovación, equilibrio y bienestar energético desde una perspectiva esotérica.',
    longDescription:
      'La limpieza energética se ofrece como práctica espiritual simbólica para acompañarte en un momento de renovación, calma o reequilibrio personal. Se realiza en un ambiente respetuoso, sin afirmaciones médicas ni garantías de resultados. El objetivo es brindarte un espacio de intención y bienestar desde una mirada esotérica.',
    includes: [
      'Sesión guiada de aproximadamente 45 minutos',
      'Conversación breve sobre tu intención personal',
      'Práctica espiritual simbólica de renovación',
      'Recomendaciones simples para el cierre de la sesión',
      'Atención privada y discreta',
    ],
    idealFor: [
      'Quienes sienten necesidad de renovación personal',
      'Personas que buscan un ritual de equilibrio simbólico',
      'Quienes desean un acompañamiento espiritual pausado',
    ],
    modality: 'Videollamada, chat o práctica a distancia acordada',
    price: 69,
    priceFrom: false,
    currency,
    duration: '45 minutos',
    category: 'energia',
    image: images.cleansing,
    active: true,
    featured: true,
    cta: 'Consultar',
    icon: 'gem',
  },
  {
    id: 'ritual-de-proteccion',
    name: 'Ritual de Protección',
    description: 'Práctica espiritual simbólica orientada a protección y fortalecimiento personal.',
    longDescription:
      'El ritual de protección es una práctica espiritual simbólica orientada a fortalecer tu sensación de cuidado, frontera personal y calma interior. Se adapta a tu contexto tras una breve conversación. Como el resto de nuestros servicios, tiene carácter esotérico y no garantiza resultados específicos.',
    includes: [
      'Consulta previa para comprender tu necesidad',
      'Práctica simbólica de protección personal',
      'Orientación sobre la intención del ritual',
      'Espacio privado y respetuoso',
      'Indicaciones de cierre según lo acordado',
    ],
    idealFor: [
      'Quienes buscan un ritual de fortalecimiento simbólico',
      'Personas que desean trabajar límites e intención personal',
      'Quienes valoran un acompañamiento discreto',
    ],
    modality: 'Consulta + práctica guiada a distancia',
    price: 59,
    priceFrom: false,
    currency,
    duration: 'Consulta + práctica guiada',
    category: 'proteccion',
    image: images.protection,
    active: true,
    featured: true,
    cta: 'Consultar',
    icon: 'shield',
  },
  {
    id: 'apertura-de-caminos',
    name: 'Apertura de Caminos',
    description:
      'Ritual espiritual enfocado simbólicamente en nuevos comienzos, oportunidades y claridad personal.',
    longDescription:
      'Apertura de caminos es un ritual espiritual simbólico para acompañar etapas de cambio, decisión o nuevo comienzo. Trabajamos tu intención y la claridad que deseas cultivar. No se prometen resultados materiales concretos: el valor está en el acompañamiento y la orientación espiritual.',
    includes: [
      'Conversación inicial sobre tu momento actual',
      'Ritual simbólico de nuevos comienzos',
      'Orientación sobre la intención personal',
      'Acompañamiento privado',
      'Cierre con recomendaciones simples',
    ],
    idealFor: [
      'Etapas de cambio o transición',
      'Búsqueda de claridad ante nuevas opciones',
      'Quienes desean marcar un nuevo inicio simbólico',
    ],
    modality: 'Consulta + ritual simbólico a distancia',
    price: 75,
    priceFrom: false,
    currency,
    duration: 'Consulta + ritual simbólico',
    category: 'prosperidad',
    image: images.hero,
    active: true,
    featured: true,
    cta: 'Consultar',
    icon: 'compass',
  },
  {
    id: 'prosperidad-y-abundancia',
    name: 'Prosperidad y Abundancia',
    description:
      'Ritual espiritual enfocado en intenciones relacionadas con prosperidad, motivación y nuevos proyectos.',
    longDescription:
      'Este ritual espiritual se orienta a trabajar simbólicamente intenciones de prosperidad, motivación y enfoque en proyectos personales. Es un acompañamiento esotérico, no un servicio financiero ni una promesa de resultados económicos.',
    includes: [
      'Conversación sobre tu intención de prosperidad',
      'Ritual simbólico de abundancia',
      'Orientación espiritual personalizada',
      'Atención privada',
      'Seguimiento breve según lo acordado',
    ],
    idealFor: [
      'Quienes inician un proyecto o etapa nueva',
      'Personas que desean reforzar motivación e intención',
      'Quienes buscan un ritual simbólico de abundancia',
    ],
    modality: 'Consulta + ritual simbólico a distancia',
    price: 79,
    priceFrom: false,
    currency,
    duration: 'Consulta + ritual simbólico',
    category: 'prosperidad',
    image: images.prosperity,
    active: true,
    featured: true,
    cta: 'Consultar',
    icon: 'coins',
  },
  {
    id: 'lectura-de-cartas',
    name: 'Lectura de Cartas',
    description:
      'Interpretación de cartas como herramienta de reflexión y orientación personal, en un espacio privado y respetuoso.',
    longDescription:
      'La lectura de cartas es una consulta privada para explorar preguntas sobre tu presente, emociones o posibles caminos. Se realiza con un lenguaje claro y respetuoso. Las cartas no predicen hechos inevitables: sirven para reflexionar y ordenar ideas.',
    includes: [
      'Sesión de aproximadamente 30 minutos',
      'Lectura orientada a tu pregunta principal',
      'Interpretación simbólica y comprensible',
      'Espacio para aclaraciones',
      'Modalidad por videollamada o chat',
    ],
    idealFor: [
      'Preguntas generales de orientación',
      'Quienes desean una lectura clara y breve',
      'Primera consulta de tarot o cartas',
    ],
    modality: 'Videollamada o chat privado',
    price: 45,
    priceFrom: false,
    currency,
    duration: '30 minutos',
    category: 'tarot',
    image: images.tarot,
    active: true,
    featured: false,
    cta: 'Consultar',
    icon: 'sparkles',
  },
  {
    id: 'armonizacion-energetica',
    name: 'Armonización Energética',
    description:
      'Acompañamiento espiritual para explorar el equilibrio personal, la calma y la conexión consigo mismo.',
    longDescription:
      'La armonización energética es un acompañamiento espiritual orientado a la calma, el equilibrio percibido y la conexión personal. Se adapta a tu ritmo y se ofrece como práctica esotérica, sin carácter terapéutico clínico.',
    includes: [
      'Sesión de aproximadamente 40 minutos',
      'Diálogo sobre tu intención de equilibrio',
      'Práctica espiritual simbólica',
      'Ambiente privado y respetuoso',
      'Cierre con orientaciones simples',
    ],
    idealFor: [
      'Quienes buscan calma y centrado personal',
      'Personas que desean un ritual suave de equilibrio',
      'Quienes valoran un acompañamiento cercano',
    ],
    modality: 'Videollamada o chat',
    price: 65,
    priceFrom: false,
    currency,
    duration: '40 minutos',
    category: 'energia',
    image: images.about,
    active: true,
    featured: false,
    cta: 'Consultar',
    icon: 'flower',
  },
  {
    id: 'consultas-de-astrologia',
    name: 'Consultas de Astrología',
    description:
      'Lectura simbólica de elementos astrológicos para reflexionar sobre ciclos, tendencias y caminos personales.',
    longDescription:
      'La consulta de astrología ofrece una lectura simbólica de ciclos y tendencias para apoyarte en la reflexión personal. No se presenta como predicción exacta del futuro, sino como una herramienta de orientación esotérica.',
    includes: [
      'Sesión de aproximadamente 45 minutos',
      'Exploración de temas que tú priorices',
      'Lectura simbólica clara y respetuosa',
      'Espacio para preguntas',
      'Atención privada',
    ],
    idealFor: [
      'Quienes desean mirar ciclos personales',
      'Personas curiosas por la astrología simbólica',
      'Momentos de decisión o transición',
    ],
    modality: 'Videollamada o chat',
    price: 55,
    priceFrom: false,
    currency,
    duration: '45 minutos',
    category: 'astrologia',
    image: images.hero,
    active: true,
    featured: false,
    cta: 'Consultar',
    icon: 'moon-star',
  },
  {
    id: 'interpretacion-espiritual',
    name: 'Interpretación Espiritual',
    description:
      'Espacio de diálogo para explorar símbolos, sueños, intuiciones y preguntas existenciales desde una mirada esotérica.',
    longDescription:
      'Un espacio de diálogo espiritual para explorar símbolos, sueños, intuiciones o preguntas profundas. El enfoque es reflexivo y respetuoso, sin promesas de certeza absoluta.',
    includes: [
      'Sesión de aproximadamente 40 minutos',
      'Escucha atenta de tu relato o duda',
      'Interpretación simbólica y espiritual',
      'Ambiente privado',
      'Cierre con puntos de claridad personal',
    ],
    idealFor: [
      'Sueños, símbolos o intuiciones a explorar',
      'Preguntas existenciales o espirituales',
      'Quienes buscan conversación profunda y serena',
    ],
    modality: 'Videollamada o chat',
    price: 52,
    priceFrom: false,
    currency,
    duration: '40 minutos',
    category: 'personalizado',
    image: images.about,
    active: true,
    featured: false,
    cta: 'Consultar',
    icon: 'infinity',
  },
  {
    id: 'consultas-personalizadas',
    name: 'Consultas Personalizadas',
    description:
      'Acompañamiento a medida según tu situación. Conversamos primero para recomendar la práctica espiritual más adecuada.',
    longDescription:
      'Si no tienes claro qué servicio necesitas, esta consulta personalizada permite escuchar tu situación y recomendarte la alternativa más adecuada: tarot, ritual simbólico u otra práctica espiritual. Es el punto de partida ideal cuando quieres orientación sin compromiso rígido.',
    includes: [
      'Conversación inicial para comprender tu caso',
      'Recomendación del servicio más adecuado',
      'Orientación clara sobre siguientes pasos',
      'Atención privada y sin presión',
      'Posibilidad de continuar con la reserva del servicio elegido',
    ],
    idealFor: [
      'Quienes no saben por dónde empezar',
      'Situaciones que requieren orientación previa',
      'Personas que prefieren una recomendación personalizada',
    ],
    modality: 'WhatsApp, videollamada o chat',
    price: 60,
    priceFrom: true,
    currency,
    duration: 'Según la sesión',
    category: 'personalizado',
    image: images.portrait,
    active: true,
    featured: false,
    cta: 'Consultar',
    icon: 'user',
  },
];

/** Mapeo de modalidades de tarot / rituales de amor hacia el servicio detallado. */
export const serviceDetailAliases: Record<string, string> = {
  'tarot-amor': 'tarot-del-amor',
  'tarot-dinero': 'lectura-de-cartas',
  'tarot-trabajo': 'lectura-de-cartas',
  'tarot-camino': 'lectura-de-cartas',
  'tarot-general': 'lectura-de-cartas',
  'ritual-armonizacion': 'amarres-de-amor',
  'ritual-reconciliacion': 'amarres-de-amor',
  'ritual-intencion-amorosa': 'amarres-de-amor',
};

export const loveRituals = [
  {
    id: 'ritual-armonizacion',
    title: 'Ritual de armonización',
    description:
      'Práctica espiritual centrada en la calma, el equilibrio emocional y la intención de cultivar vínculos más conscientes.',
    serviceId: 'amarres-de-amor',
  },
  {
    id: 'ritual-reconciliacion',
    title: 'Ritual de reconciliación',
    description:
      'Acompañamiento simbólico para reflexionar sobre el diálogo, el cierre o la posibilidad de reencontrarse desde el respeto.',
    serviceId: 'amarres-de-amor',
  },
  {
    id: 'ritual-intencion-amorosa',
    title: 'Ritual de intención amorosa',
    description:
      'Orientación espiritual para clarificar lo que deseas atraer, cuidar o transformar en tu vida afectiva.',
    serviceId: 'amarres-de-amor',
  },
] as const;

export const tarotModalities = [
  {
    id: 'tarot-amor',
    emoji: '❤️',
    title: 'Amor',
    name: 'Lectura de Tarot — Amor',
    duration: '30 minutos',
    description:
      'Consulta privada mediante videollamada o chat, enfocada en relaciones y emociones.',
    price: 49,
    serviceId: 'tarot-del-amor',
  },
  {
    id: 'tarot-dinero',
    emoji: '💰',
    title: 'Dinero',
    name: 'Lectura de Tarot — Dinero',
    duration: '30 minutos',
    description:
      'Espacio para explorar decisiones, bloqueos percibidos y posibles caminos materiales.',
    price: 49,
    serviceId: 'lectura-de-cartas',
  },
  {
    id: 'tarot-trabajo',
    emoji: '💼',
    title: 'Trabajo',
    name: 'Lectura de Tarot — Trabajo',
    duration: '30 minutos',
    description: 'Orientación simbólica sobre vocación, cambios laborales y claridad profesional.',
    price: 49,
    serviceId: 'lectura-de-cartas',
  },
  {
    id: 'tarot-camino',
    emoji: '🌙',
    title: 'Camino personal',
    name: 'Lectura de Tarot — Camino personal',
    duration: '40 minutos',
    description:
      'Consulta privada para mirar el momento presente y las opciones que sientes abiertas.',
    price: 55,
    serviceId: 'lectura-de-cartas',
  },
  {
    id: 'tarot-general',
    emoji: '🔮',
    title: 'Lectura general',
    name: 'Lectura de Tarot — 30 minutos',
    duration: '30 minutos',
    description: 'Consulta privada mediante videollamada o chat.',
    price: 45,
    serviceId: 'lectura-de-cartas',
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: 'Elige tu servicio',
    text: 'Explora las consultas y rituales, y selecciona el que más resuene con tu búsqueda.',
  },
  {
    step: 2,
    title: 'Cuéntanos brevemente tu situación',
    text: 'Comparte el contexto que desees, con total discreción, para poder orientarte mejor.',
  },
  {
    step: 3,
    title: 'Selecciona tu método de atención',
    text: 'Videollamada, chat o mensaje. Tú eliges cómo te sientes más cómoda o cómodo.',
  },
  {
    step: 4,
    title: 'Realiza tu reserva',
    text: 'Coordinamos día y horario. Más adelante podrás completar el pago en línea.',
  },
  {
    step: 5,
    title: 'Recibe tu consulta',
    text: 'En un espacio privado, cercano y respetuoso, pensado para escucharte con calma.',
  },
] as const;

export const benefits = [
  { icon: 'sparkles', title: 'Consultas personalizadas' },
  { icon: 'moon', title: 'Atención privada' },
  { icon: 'star', title: 'Servicios espirituales' },
  { icon: 'heart', title: 'Reserva sencilla' },
] as const;
