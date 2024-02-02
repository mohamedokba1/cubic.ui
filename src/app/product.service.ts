import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from './../env';

const BASE_URL: string = environment.development.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products`);
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${BASE_URL}/products/${id}`);
  }
}
