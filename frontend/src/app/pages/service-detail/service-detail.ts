import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PaymentButton } from '../../components/payment-button/payment-button';
import { ServiceCard } from '../../components/service-card/service-card';
import { Icon } from '../../components/icon/icon';
import { IconName } from '../../components/icon/icon-map';
import {
  getRelatedServices,
  getServiceById,
} from '../../config/services';
import { siteConfig } from '../../config/site';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-service-detail-page',
  imports: [RouterLink, PaymentButton, ServiceCard, Icon],
  templateUrl: './service-detail.html',
})
export class ServiceDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  readonly site = siteConfig;
  private readonly serviceId = toSignal(this.route.paramMap.pipe(map((params) => params.get('id'))), {
    initialValue: null,
  });

  readonly service = computed(() => {
    const id = this.serviceId();
    return id ? getServiceById(id) : undefined;
  });

  readonly related = computed(() => {
    const current = this.service();
    return current ? getRelatedServices(current) : [];
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      const service = id ? getServiceById(id) : undefined;
      if (!service) {
        this.seo.set({
          title: `Servicio no encontrado | ${siteConfig.name}`,
          description: siteConfig.seo.description,
          path: `/servicios/${id ?? ''}`,
          jsonLd: null,
        });
        return;
      }

      this.seo.set({
        title: `${service.name} | ${siteConfig.name}`,
        description: service.description,
        path: `/servicios/${service.id}`,
        image: service.image,
        type: 'product',
        jsonLd: this.seo.serviceJsonLd(service),
      });
    });
  }

  iconName(value: string): IconName {
    return value as IconName;
  }
}
