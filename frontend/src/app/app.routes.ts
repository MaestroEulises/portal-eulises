import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { NotFoundPage } from './pages/not-found/not-found';
import { PrivacyPage } from './pages/privacy/privacy';
import { ServiceDetailPage } from './pages/service-detail/service-detail';
import { ServicesPage } from './pages/services/services-page';
import { TermsPage } from './pages/terms/terms';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'servicios', component: ServicesPage },
  { path: 'servicios/:id', component: ServiceDetailPage },
  { path: 'privacidad', component: PrivacyPage },
  { path: 'terminos', component: TermsPage },
  { path: '**', component: NotFoundPage },
];
