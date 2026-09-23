import { Component, inject } from '@angular/core';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.html',
})
export class WhatsAppButton {
  private readonly whatsapp = inject(WhatsAppService);
  readonly href = this.whatsapp.welcomeUrl();

  onContactClick(): void {
    this.whatsapp.onContactClick();
  }
}
