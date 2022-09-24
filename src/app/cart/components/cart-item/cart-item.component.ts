import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICart } from '../../model/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input('cart') cart!: ICart;
  @Output() quantityIncrease: EventEmitter<number> = new EventEmitter();
  @Output() quantityDecrease: EventEmitter<number> = new EventEmitter();
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onQuantityIncrease(cartId: number) {
    this.quantityIncrease.emit(cartId);
  }

  onQuantityDecrease(productId: number){
    this.quantityDecrease.emit(productId);
  }

  onDeleteItem(cartId: number){
    this.deleteItem.emit(cartId);
  }

}
