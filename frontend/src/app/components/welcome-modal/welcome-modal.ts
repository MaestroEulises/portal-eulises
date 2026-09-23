import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, OnDestroy, signal } from '@angular/core';
import { siteConfig } from '../../config/site';
import { BrandTagline } from '../brand-tagline/brand-tagline';
import { Icon } from '../icon/icon';

const STORAGE_KEY = 'maestro-eulises-welcome-seen';

@Component({
  selector: 'app-welcome-modal',
  imports: [BrandTagline, Icon],
  templateUrl: './welcome-modal.html',
})
export class WelcomeModal implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  readonly site = siteConfig;
  readonly videoSrc = '/videos/hero-velas-cartas.mp4';
  readonly posterSrc = siteConfig.images.hero;
  readonly open = signal(false);
  readonly showVideo = signal(false);

  constructor() {
    const reducedMotion =
      typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadySeen = sessionStorage.getItem(STORAGE_KEY) === '1';

    if (!alreadySeen) {
      this.open.set(true);
      this.showVideo.set(!reducedMotion);
      this.document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    if (!this.open()) {
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, '1');
    this.open.set(false);
    this.document.body.style.overflow = '';
  }

  onVideoError(): void {
    this.showVideo.set(false);
  }
}
