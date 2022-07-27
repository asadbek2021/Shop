import { Component, Input, OnInit } from '@angular/core';

import { ICart } from '../../model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input('cart') cart!: ICart;
  constructor() { }

  ngOnInit(): void {
  }

}
