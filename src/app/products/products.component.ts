import { ProductsService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

}
