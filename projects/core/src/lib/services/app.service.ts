import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  Category,
  Diff,
  Task
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private db = new Database();
  private diffs = new BehaviorSubject<Diff[]>(null);
  diffs$ = this.diffs.asObservable();

  private reviver = (key: string, value: any) => {
    if (!(this.renderProp(key)))
      return;

    switch (typeof value) {
      case 'number':
      case 'boolean':
      case 'string':
      case 'object':
        return value;
      default:
        return;
    }
  }

  private renderProp = (key: string) => key.length > 2 && key.endsWith('Id')
    ? false
    : true;

  private getValueFromKey = (key: string, entries: [string, any][]) => {
    const entry = entries.find(prop => prop[0] === key)

    return entry
      ? entry[1]
      : null;
  }

  private compare = (a: any, b: any) => {
    if (this.isObject(a) && this.isObject(b))
      return JSON.stringify(a) === JSON.stringify(b)
    else
      return a === b;
  }

  parseValue = (value: string): Object => JSON.parse(value, this.reviver);

  getProps = (value: string | object) => {
    if (typeof value === 'string')
      value = this.parseValue(value);

    return Object.entries(value);
  }

  buildGraph = (diff: Diff) => {
    const previous = this.getProps(diff.previous);
    const proposed = this.getProps(diff.proposed);
    const result = new Array<{ key: string, previous: any, proposed: any, same: boolean }>();

    for (const prop of previous) {
      const preVal = prop[1];
      const proVal = this.getValueFromKey(prop[0], proposed);

      result.push({
        key: prop[0],
        previous: preVal,
        proposed: proVal,
        same: this.compare(preVal, proVal)
      })
    }

    return result;
  }

  isObject = (prop: any) => prop != null && typeof prop === 'object'
    ? true
    : false;

  getDiffs = () => this.diffs.next(this.db.getDiffs());
}

class Database {
  private db = {
    diffs: new Array<Diff>(
      {
        id: 1,
        previous: JSON.stringify({
          id: 1,
          categoryId: 1,
          value: 'Configure Build Server',
          isComplete: false,
          category: {
            id: 1,
            value: 'Work'
          } as Category
        } as Task, null, 2),
        proposed: JSON.stringify({
          id: 1,
          categoryId: 1,
          value: 'Shoot Build Server',
          isComplete: true,
          category: {
            id: 1,
            value: 'Work'
          } as Category
        } as Task, null, 2)
      } as Diff,
      {
        id: 2,
        previous: JSON.stringify({
          id: 2,
          categoryId: 2,
          value: 'Grocery Shopping',
          isComplete: false,
          category: {
            id: 2,
            value: 'Recreation'
          } as Category
        } as Task, null, 2),
        proposed: JSON.stringify({
          id: 2,
          categoryId: 3,
          value: 'Grocery Shopping',
          isComplete: false,
          category: {
            id: 3,
            value: 'Chore'
          } as Category
        } as Task, null, 2)
      } as Diff
    )
  }

  getDiffs = () => this.db.diffs;
}
