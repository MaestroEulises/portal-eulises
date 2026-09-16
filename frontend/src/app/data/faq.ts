export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'amarre',
    question: '¿Qué es un amarre de amor?',
    answer:
      'En este espacio, un amarre de amor se entiende como una práctica espiritual y simbólica orientada a trabajar intenciones personales relacionadas con el afecto, los vínculos y la reconciliación. No es un procedimiento que controle la voluntad de otra persona ni un resultado asegurado. Cada caso comienza con una conversación privada para comprender tu situación y proponerte un acompañamiento respetuoso.',
  },
  {
    id: 'tarot-futuro',
    question: '¿El tarot predice exactamente el futuro?',
    answer:
      'No. El tarot se ofrece aquí como una herramienta de reflexión, simbolismo y orientación personal. Las cartas no predicen hechos inevitables ni reemplazan tus decisiones. Sirven para mirar con más claridad preguntas, emociones y posibles caminos.',
  },
  {
    id: 'como-consulta',
    question: '¿Cómo se realiza una consulta?',
    answer:
      'Puedes elegir un servicio, contarnos brevemente tu situación y coordinar la atención por videollamada, chat o mensaje. Recibirás indicaciones claras antes de la sesión para que sepas cómo prepararte y qué esperar.',
  },
  {
    id: 'privadas',
    question: '¿Las consultas son privadas?',
    answer:
      'Sí. Las consultas se realizan en un espacio discreto. La información que compartas se trata con confidencialidad y se utiliza únicamente para brindarte la atención solicitada.',
  },
  {
    id: 'online',
    question: '¿Puedo realizar una consulta online?',
    answer:
      'Sí. La mayoría de los servicios pueden realizarse a distancia, por videollamada o chat, con la misma atención personalizada que en un encuentro privado.',
  },
  {
    id: 'duracion',
    question: '¿Cuánto dura una sesión?',
    answer:
      'Depende del servicio. Las lecturas de tarot suelen durar alrededor de 30 minutos y otras consultas entre 40 y 45 minutos. La duración exacta aparece en cada servicio y se confirma al reservar.',
  },
  {
    id: 'pago',
    question: '¿Cómo puedo pagar?',
    answer:
      'Por ahora coordinamos la reserva y el medio de pago durante la conversación (por ejemplo transferencia o el método que se indique). El sitio está preparado para integrar pagos en línea más adelante.',
  },
  {
    id: 'cancelar',
    question: '¿Puedo cancelar o reprogramar?',
    answer:
      'Sí. Puedes solicitar cancelación o cambio de horario con antelación razonable, contactándonos por WhatsApp o correo. Las condiciones concretas se confirman al reservar y pueden consultarse en los términos del sitio.',
  },
  {
    id: 'resultados',
    question: '¿Los rituales garantizan un resultado?',
    answer:
      'No. Los servicios son prácticas espirituales, esotéricas y/o de entretenimiento o creencia personal. No garantizan resultados específicos, no pueden asegurar cambios en las decisiones, sentimientos o voluntad de otras personas, y no sustituyen asesoramiento médico, psicológico, legal o financiero profesional.',
  },
];
