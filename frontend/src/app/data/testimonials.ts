export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Me gustó mucho la atención y la explicación durante la consulta. Sentí que pude expresar mi situación con tranquilidad.',
    author: 'Mariana R.',
    role: 'Cliente verificado',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'La lectura de tarot fue clara y respetuosa. No sentí presiones, solo un espacio para pensar con más calma lo que estoy viviendo.',
    author: 'Laura G.',
    role: 'Cliente verificado',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'Valoro que me explicaran el sentido simbólico del ritual y que la reserva fuera sencilla. La conversación previa me dio confianza.',
    author: 'Andrés P.',
    role: 'Cliente verificado',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'El ambiente de la consulta fue discreto y cálido. Me ayudó a ordenar mis ideas y a mirar mi vínculo desde otro lugar.',
    author: 'Sofía M.',
    role: 'Cliente verificado',
    rating: 4,
  },
  {
    id: 't5',
    quote:
      'Pedí una limpieza energética como práctica espiritual. La sesión se sintió pausada, cuidada y sin promesas exageradas.',
    author: 'Camila T.',
    role: 'Cliente verificado',
    rating: 5,
  },
  {
    id: 't6',
    quote:
      'Respondieron rápido por WhatsApp y me orientaron sobre qué consulta podía ser más adecuada para mí. Muy buena predisposición.',
    author: 'Diego H.',
    role: 'Cliente verificado',
    rating: 5,
  },
];
