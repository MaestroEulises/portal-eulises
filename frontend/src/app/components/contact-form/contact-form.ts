import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { getActiveServices } from '../../config/services';
import { siteConfig } from '../../config/site';
import { ContactService } from '../../services/contact.service';
import { WhatsAppService } from '../../services/whatsapp.service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink, Icon],
  templateUrl: './contact-form.html',
})
export class ContactForm {
  private readonly fb = inject(FormBuilder);
  private readonly contact = inject(ContactService);
  private readonly whatsapp = inject(WhatsAppService);

  readonly site = siteConfig;
  readonly services = getActiveServices();
  readonly status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  readonly statusMessage = signal('');
  readonly whatsappUrl = this.whatsapp.urlFor('contacto');
  private submittedAt = 0;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    whatsapp: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]{8,20}$/)]],
    email: ['', [Validators.required, Validators.email]],
    serviceId: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
    contactPreference: ['whatsapp' as 'whatsapp' | 'email' | 'call', Validators.required],
    privacyAccepted: [false, Validators.requiredTrue],
    website: [''],
  });

  constructor() {
    this.submittedAt = Date.now();
  }

  hasError(control: string): boolean {
    const field = this.form.get(control);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.status.set('error');
      this.statusMessage.set('Revisa los campos marcados para continuar.');
      return;
    }

    if (Date.now() - this.submittedAt < siteConfig.contact.formMinSubmitMs) {
      this.status.set('error');
      this.statusMessage.set('Espera un momento e inténtalo de nuevo.');
      return;
    }

    this.status.set('loading');
    this.statusMessage.set('Enviando tu consulta...');
    this.contact.submit(this.form.getRawValue()).subscribe({
      next: (result) => {
        this.status.set(result.ok ? 'success' : 'error');
        this.statusMessage.set(result.message);
        if (result.ok) {
          this.form.reset({
            contactPreference: 'whatsapp',
            privacyAccepted: false,
            website: '',
            serviceId: '',
            name: '',
            whatsapp: '',
            email: '',
            message: '',
          });
        }
      },
      error: () => {
        this.status.set('error');
        this.statusMessage.set(
          'No pudimos enviar tu consulta. Inténtalo de nuevo o escribe por WhatsApp.',
        );
      },
    });
  }
}
