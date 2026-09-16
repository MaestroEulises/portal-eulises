import { Component } from '@angular/core';

@Component({
  selector: 'app-starfield',
  templateUrl: './starfield.html',
  host: {
    class: 'pointer-events-none fixed inset-0 z-0 overflow-hidden',
    'aria-hidden': 'true',
  },
})
export class Starfield {}
