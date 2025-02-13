import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/produtos';

  constructor(private http: HttpClient) {}

  // Método para listar produtos
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para adicionar um produto
  createProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  // Método para atualizar um produto
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  // Método para deletar um produto
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}