import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy-page',
  imports: [RouterLink],
  templateUrl: './privacy.html',
})
export class PrivacyPage {
  readonly site = siteConfig;

  constructor() {
    inject(SeoService).set({
      title: `Política de privacidad | ${siteConfig.name}`,
      description: 'Información sobre el tratamiento de datos personales en Maestro Eulises.',
      path: '/privacidad',
    });
  }
}
