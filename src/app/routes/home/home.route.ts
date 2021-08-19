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

  buildGraph = (event: Diff) => {
    console.log('Diff Graph', this.app.buildGraph(event.previous, event.proposed));
  }
}
