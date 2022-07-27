import { Category } from '../../enums/category';
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Category
}
