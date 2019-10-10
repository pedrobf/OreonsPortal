import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Endpoint } from './../../Endpoints/Endpoint';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(Endpoint.getAllCategories());
  }

  getCategory(id: string): Observable<any> {
    return this.http.get<any>(Endpoint.getCategory(id));
  }

  createCategory(value: any): Observable<any> {
    return this.http.post(Endpoint.createCategory(), value);
  }

  updateCategory(value: any): Observable<any> {
    return this.http.put(Endpoint.updateCategory(value.id), value);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(Endpoint.deleteCategory(id));
  }

  deleteSubCategory(id: string, level: number): Observable<any> {
    return this.http.delete(Endpoint.deleteSubCategory(id, level));
  }
}
