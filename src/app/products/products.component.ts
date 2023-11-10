import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/Product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[] = [
    { name: 'Prodotto Rosso', color: '#AB0000', price: 20.5 },
    { name: 'Prodotto Blu', color: '#006BA6', price: 10 },
    { name: 'Prodotto Verde', color: '#399E5A', price: 37.99 },
    { name: 'Prodotto Test', color: '#FFBC42', price: 11.70 },
    { name: 'Prodotto Test 2', color: '#0E103D', price: 5 },
    { name: 'Prodotto Test 3', color: '#A5668B', price: 0.99 },
  ];
}
