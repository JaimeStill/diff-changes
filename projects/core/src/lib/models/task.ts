import { Category } from './category';

export interface Task {
  id: number;
  categoryId: number;
  value: string;
  isComplete: boolean;

  category?: Category;
}
