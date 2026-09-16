import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-tagline',
  host: {
    class: 'inline-flex max-w-full',
  },
  template: `
    <span class="brand-tagline" [class]="sizeClass()">
      @for (part of parts(); track part; let last = $last) {
        <span>{{ part }}</span>
        @if (!last) {
          <span class="brand-dot" [class.brand-dot-lg]="size() === 'hero'" aria-hidden="true"></span>
        }
      }
    </span>
  `,
})
export class BrandTagline {
  readonly parts = input.required<readonly string[]>();
  readonly size = input<'default' | 'hero' | 'compact'>('default');

  sizeClass(): string {
    if (this.size() === 'hero') return 'brand-tagline-hero';
    if (this.size() === 'compact') return 'brand-tagline-compact';
    return '';
  }
}
