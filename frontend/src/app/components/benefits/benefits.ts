import { Component } from '@angular/core';
import { benefits } from '../../data/services';
import { Icon } from '../icon/icon';
import { IconName } from '../icon/icon-map';

@Component({
  selector: 'app-benefits',
  imports: [Icon],
  templateUrl: './benefits.html',
})
export class Benefits {
  readonly items = benefits;

  iconName(value: string): IconName {
    return value as IconName;
  }
}
