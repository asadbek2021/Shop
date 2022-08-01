import { Injectable } from '@angular/core';

import { Category } from 'src/app/enums/category';
import { IProduct } from '../models/product';

const products = [
  {
    id:'prod1',
    name: 'Horizon: Forbidden West',
    description: 'desc',
    isAvailable: true,
    category: Category.Action,
    price:100
  },
  {
    id:'prod2',
    name: 'Red Dead Redemption 2',
    description: 'desc',
    isAvailable: false,
    category: Category.Puzzle,
    price:200
  },
  {
    id:'prod3',
    name: 'The Witcher 3 Wild Hunt',
    description: 'desc',
    isAvailable: true,
    category: Category.RPG,
    price:300
  },
  {
    id:'prod4',
    name: 'God of War',
    description: 'desc',
    isAvailable: true,
    category: Category.RPG,
    price:700
  },
  {
    id:'prod5',
    name: 'Doom Eternal',
    description: 'desc',
    isAvailable: false,
    category: Category.RPG,
    price:500
  },
  {
    id:'prod6',
    name: 'Control',
    description: 'desc',
    isAvailable: true,
    category: Category.RPG,
    price:400
  },
];


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = products;
  constructor() { }


  getProducts(): IProduct[] {
    return this.products.slice();
  }
}
