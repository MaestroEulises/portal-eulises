import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { WhatsAppService } from '../../services/whatsapp.service';
import { Icon } from '../icon/icon';

interface NavItem {
  label: string;
  link: string | string[];
  fragment?: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, Icon],
  templateUrl: './header.html',
})
export class Header {
  private readonly document = inject(DOCUMENT);
  private readonly whatsapp = inject(WhatsAppService);

  readonly site = siteConfig;
  readonly whatsappUrl = this.whatsapp.welcomeUrl();
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly navItems: NavItem[] = [
    { label: 'Inicio', link: '/', fragment: 'inicio' },
    { label: 'Servicios', link: '/servicios' },
    { label: 'Tarot', link: ['/servicios', 'tarot-del-amor'] },
    { label: 'Amarres', link: ['/servicios', 'amarres-de-amor'] },
    { label: 'Testimonios', link: '/', fragment: 'testimonios' },
    { label: 'Preguntas frecuentes', link: '/', fragment: 'preguntas-frecuentes' },
    { label: 'Contacto', link: '/', fragment: 'contacto' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set((this.document.defaultView?.scrollY ?? 0) > 16);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
