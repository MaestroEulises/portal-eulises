import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-terms-page',
  imports: [RouterLink],
  templateUrl: './terms.html',
})
export class TermsPage {
  readonly site = siteConfig;

  constructor() {
    inject(SeoService).set({
      title: `Términos y condiciones | ${siteConfig.name}`,
      description: 'Condiciones de uso de los servicios espirituales y esotéricos de Maestro Eulises.',
      path: '/terminos',
    });
  }
}
