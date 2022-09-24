import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { ICart } from '../../model/cart';
import { registerLocaleData } from '@angular/common';
import localeUz from '@angular/common/locales/uz'

registerLocaleData(localeUz)

const opts = {
  'Product name': 'productName',
  'Product quantity': 'quantity',
  'Product price': 'price',
}

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, AfterContentChecked {
  carts!: ICart[];
  totalCost!: number;
  totalQuantity!: number;
  sortOptions = opts;
  sortDirection: boolean = true;

  // ?
  @ViewChild('sorter') sortByType!: HTMLSelectElement;

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

  onTrackCart(index: number, cart: ICart): number{
    return cart.id
  }

  onQuantityIncrease (cartId: number){
    this.cartService.increaseQuantity(cartId);
  }

  onQuantityDecrease (cartId: number){
    this.cartService.decreaseQuantity(cartId);
  }

  onDeleteItem (cartId: number){
    this.cartService.removeProduct(cartId);
  }

  onChangeDirection(event:Event){
   this.sortDirection = (<HTMLInputElement>event.target).value === "true";
  }


}
