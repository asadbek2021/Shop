import { AfterContentChecked, Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { ICart } from '../../model/cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, AfterContentChecked {
  carts!: ICart[];
  totalCost!: number;
  totalQuantity!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.carts = this.cartService.getProducts();
    this.totalCost = this.cartService.totalCost;
    this.totalQuantity = this.cartService.totalQuantity;
  }

  ngAfterContentChecked(): void {
    this.carts = this.cartService.getProducts();
    this.totalCost = this.cartService.totalCost;
    this.totalQuantity = this.cartService.totalQuantity;
  }

  onTrackCart(index: number, cart: ICart): string{
    return cart.id
  }

  onQuantityIncrease (cartId: string){
    this.cartService.increaseQuantity(cartId);
  }

  onQuantityDecrease (cartId: string){
    this.cartService.decreaseQuantity(cartId);
  }

  onDeleteItem (cartId: string){
    this.cartService.removeProduct(cartId);
  }


}
