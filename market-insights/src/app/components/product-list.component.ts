// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  regions: string[] = ['Maharashtra', 'Delhi']; 
  months: string[] = ['January', 'February'];
  products: Product[] = [];
  selectedRegion: string = '';
  selectedMonth: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  imageLoadingStates: { [key: number]: boolean } = {};

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.selectedRegion = this.regions[0];
    this.selectedMonth = this.months[0];
    this.loadProducts();
  }

  loadProducts(): void {
    if (!this.selectedRegion || !this.selectedMonth) return;
    
    this.isLoading = true;
    this.errorMessage = '';
    this.imageLoadingStates = {};
    
    this.productService.getProducts(this.selectedRegion, this.selectedMonth)
      .subscribe({
        next: (products) => {
          this.products = products;
          // Initialize loading states for all images
          products.forEach(product => {
            this.imageLoadingStates[product.id] = true;
          });
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load products. Please try again.';
          this.isLoading = false;
          console.error('Error loading products:', err);
        }
      });
  }

  onImageLoad(productId: number): void {
    this.imageLoadingStates[productId] = false;
  }

  handleImageError(event: Event, productId: number): void {
  const imgElement = event.target as HTMLImageElement;
  imgElement.style.display = 'none';
  this.imageLoadingStates[productId] = false;
  
  // Optionally set imageUrl to null
  const product = this.products.find(p => p.id === productId);
  if (product) {
    product.imageUrl = null;
  }
}
}