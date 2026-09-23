import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
})
export class Cta {
  readonly site = siteConfig;
  private readonly whatsapp = inject(WhatsAppService);
  readonly whatsappUrl = this.whatsapp.welcomeUrl();

  onWhatsAppClick(): void {
    this.whatsapp.onContactClick();
  }
}
