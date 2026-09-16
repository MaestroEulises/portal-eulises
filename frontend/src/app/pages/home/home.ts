import { Component, inject } from '@angular/core';
import { About } from '../../components/about/about';
import { Benefits } from '../../components/benefits/benefits';
import { ContactForm } from '../../components/contact-form/contact-form';
import { Cta } from '../../components/cta/cta';
import { Faq } from '../../components/faq/faq';
import { Hero } from '../../components/hero/hero';
import { LoveRituals } from '../../components/love-rituals/love-rituals';
import { Process } from '../../components/process/process';
import { Services } from '../../components/services/services';
import { TarotSection } from '../../components/tarot-section/tarot-section';
import { Testimonials } from '../../components/testimonials/testimonials';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home-page',
  imports: [
    Hero,
    Benefits,
    Services,
    LoveRituals,
    TarotSection,
    Process,
    Testimonials,
    About,
    Faq,
    Cta,
    ContactForm,
  ],
  templateUrl: './home.html',
})
export class HomePage {
  constructor() {
    inject(SeoService).set({ path: '/' });
  }
}
