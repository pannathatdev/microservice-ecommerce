import { Injectable } from '@nestjs/common';
import { Product } from './Schema/product.schema';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [
    { id: '1', name: 'Product 1', description: 'Description of Product 1', price: '100' },
    { id: '2', name: 'Product 2', description: 'Description of Product 2', price: '150' },
    { id: '3', name: 'Product 3', description: 'Description of Product 3', price: '200' },
  ];

  findAll(): Product[] {
    return this.products;
  }
}
