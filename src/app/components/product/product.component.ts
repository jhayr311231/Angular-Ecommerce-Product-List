import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; // Import the product service


interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []; // Explicitly define the type as an array of Product
  newProduct: Product = { id: 0, name: '', category: '', price: 0, image: '' };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addProduct(): void {
    this.newProduct.id = this.products.length + 1; // Assign a unique ID
    this.products.push({ ...this.newProduct });
    this.newProduct = { id: 0, name: '', category: '', price: 0, image: '' };
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
