import {
  Component,
  Input
} from '@angular/core';

import { AppService } from '../services';
import { PropNode } from '../models';

@Component({
  selector: 'prop-node',
  templateUrl: 'prop-node.component.html'
})
export class PropNodeComponent {
  @Input() node: PropNode;
  @Input() preClass = 'background-pastel-red';
  @Input() proClass = 'background-pastel-green';

  constructor(
    public app: AppService
  ) { }
}
