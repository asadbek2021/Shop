import { Injectable } from '@angular/core';

import { ICart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carts: ICart[] = [
    {
      id: 'cart1',
      productId: 'prod1',
      quantity: 1
    },
    {
      id: 'cart2',
      productId: 'prod4',
      quantity: 4
    },
    {
      id: 'cart2',
      productId: 'prod2',
      quantity: 3
    },
  ]

  constructor() { }

  getCarts(): ICart[]{
    return this.carts.slice()
  }
}
