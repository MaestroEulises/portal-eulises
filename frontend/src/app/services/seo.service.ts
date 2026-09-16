import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { absoluteUrl, siteConfig } from '../config/site';
import { EsotericService } from '../models/service.model';

export interface SeoInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | null;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly jsonLdId = 'seo-json-ld';

  set(input: SeoInput = {}): void {
    const title = input.title ?? siteConfig.seo.title;
    const description = input.description ?? siteConfig.seo.description;
    const url = absoluteUrl(input.path ?? '/');
    const image = input.image?.startsWith('http')
      ? input.image
      : absoluteUrl(input.image ?? siteConfig.seo.ogImage);
    const type = input.type ?? 'website';

    this.title.setTitle(title);
    this.upsert('name', 'description', description);
    this.upsert('name', 'keywords', siteConfig.seo.keywords);
    this.upsert('name', 'author', siteConfig.name);
    this.upsert('name', 'robots', 'index, follow');
    this.upsert('name', 'theme-color', siteConfig.colors.ink);

    this.upsert('property', 'og:title', title);
    this.upsert('property', 'og:description', description);
    this.upsert('property', 'og:type', type);
    this.upsert('property', 'og:url', url);
    this.upsert('property', 'og:image', image);
    this.upsert('property', 'og:locale', 'es_ES');
    this.upsert('property', 'og:site_name', siteConfig.name);

    this.upsert('name', 'twitter:card', 'summary_large_image');
    this.upsert('name', 'twitter:title', title);
    this.upsert('name', 'twitter:description', description);
    this.upsert('name', 'twitter:image', image);
    this.upsert('name', 'twitter:site', siteConfig.seo.twitterHandle);

    this.setCanonical(url);
    this.setJsonLd(input.jsonLd === undefined ? null : input.jsonLd);
  }

  serviceJsonLd(service: EsotericService): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      url: absoluteUrl(`/servicios/${service.id}`),
      image: absoluteUrl(service.image),
      provider: {
        '@type': 'Person',
        name: siteConfig.name,
      },
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: absoluteUrl(`/servicios/${service.id}`),
      },
    };
  }

  private upsert(attr: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attr]: key, content });
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setJsonLd(data: Record<string, unknown> | null): void {
    const existing = this.document.getElementById(this.jsonLdId);
    if (!data) {
      existing?.remove();
      return;
    }

    const script =
      (existing as HTMLScriptElement | null) ?? this.document.createElement('script');
    script.id = this.jsonLdId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    if (!existing) {
      this.document.head.appendChild(script);
    }
  }
}
