import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCard } from '../../components/service-card/service-card';
import { getActiveServices } from '../../config/services';
import { siteConfig } from '../../config/site';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink, ServiceCard],
  templateUrl: './services-page.html',
})
export class ServicesPage {
  readonly site = siteConfig;
  readonly items = getActiveServices();

  constructor() {
    inject(SeoService).set({
      title: `Servicios esotéricos | ${siteConfig.name}`,
      description:
        'Consulta el catálogo de tarot, rituales espirituales, limpiezas energéticas y acompañamiento personalizado.',
      path: '/servicios',
    });
  }
}
