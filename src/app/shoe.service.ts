import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoe } from './shoe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private apiUrl = 'http://localhost:8080/shoes';

  constructor(private http: HttpClient) { }

  createShoe(shoeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, shoeData);
  }

  updateShoe(shoeId: string, updatedShoeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${shoeId}`, updatedShoeData);
  }

  deleteShoe(shoeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${shoeId}`);
  }

  getAllShoes(): Observable<Shoe[]> {
    return this.http.get<Shoe[]>(`${this.apiUrl}/all`);
  }
}
