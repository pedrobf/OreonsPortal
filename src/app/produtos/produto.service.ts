import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Endpoint } from './../../Endpoints/Endpoint';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

constructor(private http: HttpClient) { }

  getAllProdutcts(): Observable<any[]> {
    return this.http.get<any[]>(Endpoint.getAllProducts());
  }

  getProduct(id: string): Observable<any> {
    return this.http.get<any>(Endpoint.getProduct(id));
  }

  createProduct(value: any): Observable<any> {
    if (value.id) {
      return this.http.put(Endpoint.updateProduct(value.id), value, { observe: 'response' });
    } else {
      return this.http.post(Endpoint.createProdutc(), value, { observe: 'response' });
    }
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(Endpoint.deleteProduct(id), { observe: 'response' });
  }
}
