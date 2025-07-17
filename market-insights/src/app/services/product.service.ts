// product.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5185/api';
  private imageBasePath = '/assets/images/products/';

  constructor(private http: HttpClient) {}

  getProducts(region: string, month: string): Observable<Product[]> {
    let params = new HttpParams();
    if (region) params = params.append('region', region);
    if (month) params = params.append('month', month);
    
    return this.http.get<Product[]>(`${this.apiUrl}/Product`, { params }).pipe(
      map(products => products.map(product => ({
        ...product,
        imageUrl: product.imageUrl ? 
                 `${this.imageBasePath}${product.imageUrl}` : 
                 null
      } as Product))) 
    );
  }
}