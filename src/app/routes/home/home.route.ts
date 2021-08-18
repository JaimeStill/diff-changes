import {
  Component,
  OnInit
} from '@angular/core';

import {
  AppService,
  Diff
} from 'core';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
  constructor(
    public app: AppService
  ) { }

  ngOnInit() {
    this.app.getDiffs();
  }

  isObject = (prop: any) => typeof prop === 'object'
    ? true
    : false;

  shouldRender = (key: string) => key.length > 2 && key.toLowerCase().includes('id')
    ? false
    : true;

  getEntries = (value: string | object) => {
    if (typeof value === 'string')
      value = this.app.parseValue(value);

    return Object.entries(value);
  }

  testParse = (event: Diff) => {
    const previous = this.app.parseValue(event.previous);
    const proposed = this.app.parseValue(event.proposed);

    console.log('Diff', event);
    console.log('Previous', previous);
    console.log('Proposed', proposed);
  }
}
