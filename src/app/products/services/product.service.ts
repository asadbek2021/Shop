import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from 'src/app/enums/category';
import { IProduct } from '../models/product';

const products: IProduct[] = [
  {
    id: 1,
    name: 'Horizon: Forbidden West',
    description: 'desc',
    isAvailable: true,
    category: Category.Action,
    price:100
  },
  {
    id: 2,
    name: 'Red Dead Redemption 2',
    description: 'desc',
    isAvailable: false,
    category: Category.Puzzle,
    price:200
  },
  {
    id: 3,
    name: 'The Witcher 3 Wild Hunt',
    description: 'desc',
    isAvailable: true,
    category: Category.RPG,
    price:300
  },
  {
    id: 4,
    name: 'God of War',
    description: 'desc',
    isAvailable: true,
    category: Category.RPG,
    price:700
  },
  {
    id: 5,
    name: 'Doom Eternal',
    description: 'desc',
    isAvailable: false,
    category: Category.RPG,
    price:500
  },
  {
    id: 6,
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
    // можно короче
    // return of(this.products)
    return this.products;
  }

  getProduct(id: number | null){
    return this.products.find(product => product.id === id);
  }

}
