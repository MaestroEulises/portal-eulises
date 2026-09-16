import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EsotericService } from '../../models/service.model';
import { Icon } from '../icon/icon';
import { IconName } from '../icon/icon-map';
import { PaymentButton } from '../payment-button/payment-button';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink, Icon, PaymentButton],
  templateUrl: './service-card.html',
  host: { class: 'block h-full' },
})
export class ServiceCard {
  readonly service = input.required<EsotericService>();

  iconName(value: string): IconName {
    return value as IconName;
  }
}
