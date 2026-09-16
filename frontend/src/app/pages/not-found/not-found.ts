import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <section
      class="container-page flex min-h-[70vh] flex-col justify-center pt-28 pb-20 text-center"
    >
      <p class="section-kicker">404</p>
      <h1 class="mt-3 font-display text-4xl">Página no encontrada</h1>
      <p class="mx-auto mt-4 max-w-md text-cream/70">
        El enlace no existe o fue movido. Vuelve al inicio para continuar tu consulta.
      </p>
      <a routerLink="/" class="btn-primary mx-auto mt-8">Ir al inicio</a>
    </section>
  `,
})
export class NotFoundPage {
  constructor() {
    inject(SeoService).set({
      title: `Página no encontrada | ${siteConfig.name}`,
      description: siteConfig.seo.description,
      path: '/404',
    });
  }
}
