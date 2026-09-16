import { services, serviceDetailAliases } from '../data/services';
import { EsotericService } from '../models/service.model';
import { formatPrice } from './site';

export { services } from '../data/services';
export { formatPrice } from './site';

export function getActiveServices(): EsotericService[] {
  return services.filter((service) => service.active);
}

export function getFeaturedServices(): EsotericService[] {
  return getActiveServices().filter((service) => service.featured);
}

export function getServiceById(id: string): EsotericService | undefined {
  const resolvedId = serviceDetailAliases[id] ?? id;
  return services.find((service) => service.id === resolvedId && service.active);
}

export function getRelatedServices(service: EsotericService, limit = 3): EsotericService[] {
  return getActiveServices()
    .filter((item) => item.id !== service.id)
    .filter((item) => item.category === service.category || item.featured)
    .slice(0, limit);
}

export function getServicePriceLabel(service: EsotericService): string {
  return formatPrice(service.price, service.priceFrom);
}

export function getServicePath(id: string): string {
  const resolvedId = serviceDetailAliases[id] ?? id;
  return `/servicios/${resolvedId}`;
}
