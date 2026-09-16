import { Component, inject } from '@angular/core';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.html',
})
export class WhatsAppButton {
  readonly href = inject(WhatsAppService).welcomeUrl();
}
