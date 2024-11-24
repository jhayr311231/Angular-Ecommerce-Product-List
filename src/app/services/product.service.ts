import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; // Import the Product model from the model file

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 20, image: 'https://i.pinimg.com/474x/55/63/2e/55632ecba23e99b820a2f57e5a99787c.jpg' },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 30, image: 'https://i.pinimg.com/474x/ca/43/a1/ca43a11d6672b910f1c19b2c537ba2da.jpg' },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 40, image: 'https://i.pinimg.com/736x/5a/e7/10/5ae7100921e1723558468d6fc8c76ee0.jpg' },
    { id: 4, name: 'Product 4', category: 'Category 4', price: 50, image: 'https://i.pinimg.com/474x/a3/22/cf/a322cf6818888e34e89902d472d9d8e9.jpg' },
    { id: 5, name: 'Product 5', category: 'Category 5', price: 60, image: 'https://i.pinimg.com/474x/19/c1/a5/19c1a5a0912e2ff12c58260bdaa2cd4b.jpg' },
    { id: 6, name: 'Product 6', category: 'Category 6', price: 70, image: 'https://i.pinimg.com/474x/f0/88/de/f088de710ee39fc4a22b168993f8a054.jpg' },
    { id: 7, name: 'Product 7', category: 'Category 7', price: 80, image: 'https://i.pinimg.com/474x/24/5f/4e/245f4e5989039c9807c7291c5c412042.jpg' },
    { id: 8, name: 'Product 8', category: 'Category 8', price: 90, image: 'https://i.pinimg.com/474x/15/50/43/155043ebee51838b69ab0122d46e4d01.jpg' },
    { id: 9, name: 'Product 9', category: 'Category 9', price: 100, image: 'https://i.pinimg.com/474x/73/0f/d7/730fd7d6184a9147f0d08a78f7ee1af9.jpg' },
    { id: 10, name: 'Product 10', category: 'Category 10', price: 110, image: 'https://i.pinimg.com/474x/5f/41/9d/5f419ddbbf75d98176783987e3439465.jpg' },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(newProduct: Product): void {
    this.products.push(newProduct);
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
