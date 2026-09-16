import { Component } from '@angular/core';
import { siteConfig } from '../../config/site';
import { processSteps } from '../../data/services';

@Component({
  selector: 'app-process',
  templateUrl: './process.html',
})
export class Process {
  readonly site = siteConfig;
  readonly steps = processSteps;
}
