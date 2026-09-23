import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { WhatsAppService } from '../../services/whatsapp.service';
import { BrandTagline } from '../brand-tagline/brand-tagline';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BrandTagline],
  templateUrl: './footer.html',
})
export class Footer {
  readonly site = siteConfig;
  readonly year = 2026;
  private readonly whatsapp = inject(WhatsAppService);
  readonly whatsappUrl = this.whatsapp.welcomeUrl();

  onWhatsAppClick(): void {
    this.whatsapp.onContactClick();
  }
}
