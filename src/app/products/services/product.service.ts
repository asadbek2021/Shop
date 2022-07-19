import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProducts(): Product[] {
    return [
      {
        id:'prod1',
        name: 'Product1',
        description: 'desc',
        isAvailable: true,
        price:100
      },
      {
        id:'prod2',
        name: 'Product2',
        description: 'desc',
        isAvailable: false,
        price:200
      },
      {
        id:'prod3',
        name: 'Product3',
        description: 'desc',
        isAvailable: true,
        price:300
      },
    ]
  }
}
