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
  readonly whatsappUrl = inject(WhatsAppService).welcomeUrl();
}
