// src/app/models/product.model.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string; // Optional field (indicated by '?')
}
