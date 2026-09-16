import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { tarotModalities } from '../../data/services';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-tarot-section',
  imports: [RouterLink],
  templateUrl: './tarot-section.html',
})
export class TarotSection {
  readonly site = siteConfig;
  readonly items = tarotModalities;
  private readonly whatsapp = inject(WhatsAppService);

  whatsappHref(id: string): string {
    return this.whatsapp.urlFor(id);
  }
}
