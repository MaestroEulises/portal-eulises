import { Component, inject } from '@angular/core';
import { siteConfig } from '../../config/site';
import { WhatsAppService } from '../../services/whatsapp.service';
import { BrandTagline } from '../brand-tagline/brand-tagline';

@Component({
  selector: 'app-about',
  imports: [BrandTagline],
  templateUrl: './about.html',
})
export class About {
  readonly site = siteConfig;
  private readonly whatsapp = inject(WhatsAppService);
  readonly whatsappUrl = this.whatsapp.welcomeUrl();

  onWhatsAppClick(): void {
    this.whatsapp.onContactClick();
  }
}
