import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product!: IProduct;
  @Output() addToCart:EventEmitter<IProduct> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(product: IProduct){
    this.addToCart.emit(product);
  }

}
