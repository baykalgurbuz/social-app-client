import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model, Product } from './Model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  model = new Model();
  baseUrl: string = 'http://localhost:5000/';
  constructor(private http: HttpClient) {}
  getName() {
    return this.model.categoryName;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'api/products');
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'api/products', product);
  }
  updateProduct(product:Product){
    return this.http.put<Product>(this.baseUrl+'api/products/'+product.productId,product);
  }
  deleteProduct(product: Product):Observable<Product> {
   return this.http.delete<Product>(this.baseUrl+'api/products/'+product.productId);
  }
  getProductById(idN: number) {
    return this.model.products.find((i) => i.productId == idN);
  }
  saveProduct(product: Product) {
    if (product.productId == 0) {
      this.model.products.push(product);
    } else {
      const p = this.getProductById(product.productId) as Product;
      p.name = product.name;
      p.price = product.price;
      p.isActive = product.isActive;
    }
  }

}
