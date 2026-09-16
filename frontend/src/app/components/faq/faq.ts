import { Component, signal } from '@angular/core';
import { faqItems } from '../../data/faq';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-faq',
  imports: [Icon],
  templateUrl: './faq.html',
})
export class Faq {
  readonly items = faqItems;
  readonly openId = signal<string | null>(faqItems[0]?.id ?? null);

  toggle(id: string): void {
    this.openId.update((current) => (current === id ? null : id));
  }
}
