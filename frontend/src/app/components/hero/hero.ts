import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { WhatsAppService } from '../../services/whatsapp.service';
import { BrandTagline } from '../brand-tagline/brand-tagline';

const STAR_FIELD = [
  { x: 6, y: 12, s: 2, d: '0s' },
  { x: 14, y: 28, s: 1, d: '1.1s' },
  { x: 22, y: 9, s: 1.5, d: '0.4s' },
  { x: 31, y: 21, s: 1, d: '2s' },
  { x: 41, y: 14, s: 2, d: '0.8s' },
  { x: 52, y: 7, s: 1, d: '1.6s' },
  { x: 63, y: 18, s: 1.5, d: '0.2s' },
  { x: 71, y: 11, s: 1, d: '2.4s' },
  { x: 82, y: 23, s: 2, d: '1.3s' },
  { x: 91, y: 8, s: 1, d: '0.6s' },
  { x: 11, y: 42, s: 1, d: '1.8s' },
  { x: 28, y: 36, s: 1.5, d: '2.2s' },
  { x: 48, y: 32, s: 1, d: '0.9s' },
  { x: 67, y: 40, s: 2, d: '1.5s' },
  { x: 88, y: 35, s: 1, d: '2.7s' },
  { x: 18, y: 58, s: 1, d: '0.3s' },
  { x: 39, y: 62, s: 1.5, d: '1.9s' },
  { x: 76, y: 55, s: 1, d: '0.7s' },
] as const;

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, RouterLink, BrandTagline],
  templateUrl: './hero.html',
})
export class Hero {
  readonly site = siteConfig;
  readonly stars = STAR_FIELD;
  private readonly whatsapp = inject(WhatsAppService);
  readonly whatsappUrl = this.whatsapp.welcomeUrl();

  onWhatsAppClick(): void {
    this.whatsapp.onContactClick();
  }
}
