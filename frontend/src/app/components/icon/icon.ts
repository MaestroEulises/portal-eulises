import { Component, computed, input } from '@angular/core';
import type { IconNode } from 'lucide';
import { IconName, lucideIcons } from './icon-map';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input<number>(22);
  readonly strokeWidth = input<number>(1.7);
  readonly className = input('');

  readonly nodes = computed<IconNode>(() => lucideIcons[this.name()]);
}
