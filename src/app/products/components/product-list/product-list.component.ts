import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: IProduct[];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onTrackProduct(index: number, product: IProduct): string {
    return product.id
  }

  onAddToCart(product: IProduct){
    this.cartService.addCart(product);
    console.log(this.cartService.getCarts());
  }


}
