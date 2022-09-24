import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product!: IProduct;
  @Output() addToCart:EventEmitter<IProduct> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      const product = this.productService.getProduct(+id!);
      product ? this.product = product : undefined;
    })
  }

  onAddToCart(product: IProduct){
    this.addToCart.emit(product);
  }

}
