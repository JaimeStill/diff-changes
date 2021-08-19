import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { AppService } from '../services';
import { Diff } from '../models';

@Component({
  selector: 'diff-card',
  templateUrl: 'diff-card.component.html'
})
export class DiffCardComponent {
  @Input() diff: Diff;
  @Input() label = 'Diff';
  @Input() size = 500;
  @Input() preClass = 'background-pastel-red';
  @Input() proClass = 'background-pastel-green';
  @Input() actionIcon = 'code';
  @Input() actionClass = 'color-primary';

  @Output() action = new EventEmitter<Diff>();

  constructor(
    public app: AppService
  ) { }
}
