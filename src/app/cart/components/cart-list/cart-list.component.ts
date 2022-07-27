import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { ICart } from '../../model/cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  carts!: ICart[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.carts = this.cartService.getCarts();
  }

  onTrackCart(index: number, cart: ICart): string{
    return cart.id
  }


}
