import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { siteConfig } from '../../config/site';
import { getFeaturedServices } from '../../config/services';
import { ServiceCard } from '../service-card/service-card';

@Component({
  selector: 'app-services',
  imports: [RouterLink, ServiceCard],
  templateUrl: './services.html',
})
export class Services {
  readonly site = siteConfig;
  readonly items = getFeaturedServices();
}
