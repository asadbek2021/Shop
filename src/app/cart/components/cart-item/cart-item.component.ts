import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICart } from '../../model/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input('cart') cart!: ICart;
  @Output() quantityIncrease: EventEmitter<string> = new EventEmitter();
  @Output() quantityDecrease: EventEmitter<string> = new EventEmitter();
  @Output() deleteItem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onQuantityIncrease(cartId: string) {
    this.quantityIncrease.emit(cartId);
  }

  onQuantityDecrease(productId: string){
    this.quantityDecrease.emit(productId);
  }

  onDeleteItem(cartId: string){
    this.deleteItem.emit(cartId);
  }

}
