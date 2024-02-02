import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  searchId: number | undefined;
  filteredProducts: Product[] = [];
  isLoading: boolean = true;
  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    console.log(this.isLoading);
    this.productService.getAllProducts().subscribe((response) => {
      this.products = this.filteredProducts = response;
      console.log(response);
      this.isLoading = false;
    });
  }
  getProductById(): void {
    console.log('test');
    if (this.searchId === null) this.filteredProducts = this.products;
    else {
      this.filteredProducts = this.products.filter(
        (product) => product.id === Number(this.searchId)
      );
      if (this.filteredProducts.length > 0) {
        this.router.navigate(['/products', this.searchId]);
      }
    }
  }
}
