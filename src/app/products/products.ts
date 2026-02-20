import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and *ngIf

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  cartCount: number = 0;
  totalPrice: number = 0;
  
  products = [
    { name: 'Matte Lipstick', price: 200, available: true, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa' },
    { name: 'Liquid Foundation', price: 300, available: true, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be' },
    { name: 'Eyeshadow Palette', price: 500, available: false, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348' },
    { name: 'Volume Mascara', price: 150, available: true, image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74' }
  ];
  addToCart(product: any) {
    alert(product.name + ' added to cart!');
    this.cartCount++; 
    this.totalPrice += product.price; 
    alert(product.name + ' added to cart!');
  }
}
