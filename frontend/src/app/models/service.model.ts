export type ServiceCategory =
  | 'amor'
  | 'tarot'
  | 'energia'
  | 'proteccion'
  | 'prosperidad'
  | 'astrologia'
  | 'personalizado';

export type ServiceCta = 'Consultar';

export interface EsotericService {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  includes: string[];
  idealFor: string[];
  modality: string;
  price: number;
  priceFrom: boolean;
  currency: string;
  duration: string;
  category: ServiceCategory;
  image: string;
  active: boolean;
  featured: boolean;
  cta: ServiceCta;
  icon: string;
}

export interface ContactPayload {
  name: string;
  whatsapp: string;
  email: string;
  serviceId: string;
  message: string;
  contactPreference: 'whatsapp' | 'email' | 'call';
  privacyAccepted: boolean;
  website?: string;
}

export interface ContactResult {
  ok: boolean;
  message: string;
}
