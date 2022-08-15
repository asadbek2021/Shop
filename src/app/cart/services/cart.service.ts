import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/models/product';

import { ICart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: ICart[] = [];

  constructor() { }

  getProducts(): ICart[]{
    return this.cartProducts.slice()
  }

  get totalCost():number {
    return this.cartProducts.reduce((total, current)=> total + (current.price * current.quantity), 0);
  }

  get isEmptyCart():boolean {
    return !!this.cartProducts.length;
  }

  get totalQuantity():number {
    return this.cartProducts.reduce((total, current)=> total + current.quantity, 0);
  }

  addProduct(product: IProduct){
    let cart = this.cartProducts.find(c=> c.productId === product.id);
    if(cart){
      this.increaseQuantity(cart.id)
      return;
    }
     cart = {
      productId: product.id,
      productName: product.name,
      quantity: 1,
      id: `cart${this.cartProducts.length}`,
      price: product.price
    }

    this.cartProducts.push(cart);
  }

  changeQuantity(product: IProduct, quantity: number){
    const index = this.cartProducts.findIndex(c => c.productId === product.id);
    const cart: ICart = {
      productId: product.id,
      productName: product.name,
      quantity,
      id: `cart${this.cartProducts.length}`,
      price: product.price
    }
    this.cartProducts[index] = cart;
  }

  increaseQuantity(cartId: string){
    let cart = this.cartProducts.find(c=> c.id === cartId) as ICart;
    let index = this.cartProducts.findIndex(c => c.id === cartId);
    cart.quantity = cart.quantity + 1;
    this.cartProducts[index] = cart;
  }

  decreaseQuantity(cartId: string){
    let index = this.cartProducts.findIndex(c => c.id === cartId);
    if(this.cartProducts[index].quantity === 1) {
      this.removeProduct(cartId);
      return;
    }

    let quantity = this.cartProducts[index].quantity;
    quantity--;
    this.cartProducts[index].quantity = quantity;
  }

  removeProduct(cartId: string){
    let carts = this.cartProducts.filter(c => c.id !== cartId);
    this.cartProducts = carts;
  }

  removeAllProducts(){
    this.cartProducts = [];
  }
}
