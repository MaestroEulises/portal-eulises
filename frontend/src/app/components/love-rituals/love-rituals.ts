import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { loveRituals } from '../../data/services';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-love-rituals',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './love-rituals.html',
})
export class LoveRituals {
  readonly site = siteConfig;
  readonly rituals = loveRituals;
  private readonly whatsapp = inject(WhatsAppService);

  readonly detailPath = ['/servicios', 'amarres-de-amor'] as const;

  whatsappHref(id: string): string {
    return this.whatsapp.urlFor(id);
  }

  consultUrl = this.whatsapp.url('Hola, quiero consultar mi situación.');

  onWhatsAppClick(): void {
    this.whatsapp.onContactClick();
  }
}
