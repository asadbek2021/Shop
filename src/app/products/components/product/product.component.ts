import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product!: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(productId: string){
    console.log('Added to cart: ', productId);
  }

}
