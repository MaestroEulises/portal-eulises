import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { siteConfig } from '../config/site';
import { ContactPayload, ContactResult } from '../models/service.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  submit(payload: ContactPayload): Observable<ContactResult> {
    const sanitized: ContactPayload = {
      ...payload,
      name: this.sanitize(payload.name),
      email: this.sanitize(payload.email).toLowerCase(),
      whatsapp: this.sanitize(payload.whatsapp),
      message: this.sanitize(payload.message),
      website: payload.website ?? '',
    };

    return this.http.post<ContactResult>(siteConfig.contact.apiEndpoint, sanitized).pipe(
      catchError(() =>
        throwError(() => ({
          ok: false,
          message: 'No pudimos enviar tu consulta. Inténtalo de nuevo o escribe por WhatsApp.',
        })),
      ),
    );
  }

  private sanitize(value: string): string {
    return value.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim();
  }
}
