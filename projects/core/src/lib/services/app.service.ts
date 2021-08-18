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
    switch (typeof value) {
      case 'number':
      case 'boolean':
      case 'string':
      case 'object':
        return value;
      default:
        return null;
    }
  }

  getDiffs = () => this.diffs.next(this.db.getDiffs());

  parseValue = (value: string): Object => JSON.parse(value, this.reviver);
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
