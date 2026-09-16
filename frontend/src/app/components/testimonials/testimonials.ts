import { Component } from '@angular/core';
import { siteConfig } from '../../config/site';
import { testimonials } from '../../data/testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  readonly site = siteConfig;
  readonly items = testimonials;
  readonly stars = [1, 2, 3, 4, 5];
}
