import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';

import { ICart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carts: ICart[] = [
    {
      id: 'cart0',
      productId: 'prod1',
      productName: 'Fake Cart',
      quantity: 1,
      price: 300
    },
    {
      id: 'cart1',
      productId: 'prod4',
      productName: 'Fake Cart',
      quantity: 4,
      price: 300
    },
    {
      id: 'cart2',
      productId: 'prod2',
      productName: 'Fake Cart',
      quantity: 3,
      price: 300
    },
  ]

  constructor() { }

  getCarts(): ICart[]{
    return this.carts.slice()
  }

  get totalCost():number {
    return 0;
  }

  get totalQuantity():number {
    return 0;
  }

  addCart(product: IProduct){
    let cart = {
      productId: product.id,
      productName: product.name,
      quantity: 1,
      id: `cart${this.carts.length}`,
      price: product.price
    }

    this.carts.push(cart);
  }

  increaseCart(cartId: string){
    let cart = this.carts.find(c=> c.id === cartId);
    if(cart){
      let index = this.carts.findIndex(c => c.id === cartId);
      cart.quantity = cart.quantity + 1;
      this.carts[index] = cart;
    }
  }

  decreaseCart(cartId: string){
    let index = this.carts.findIndex(c => c.id === cartId);
    if(this.carts[index].quantity === 1) {
      this.removeCart(cartId);
      return;
    }
    this.carts[index].quantity --;
  }

  removeCart(cartId: string){
    let carts = this.carts.filter(c => c.id !== cartId);
    this.carts = carts;
  }
}
