import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoeDTO } from './shoe-dto.model';

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

  getAllShoes(): Observable<ShoeDTO[]> {
    return this.http.get<ShoeDTO[]>(`${this.apiUrl}/all`);
  }

  getShoeById(shoeId: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/get/${shoeId}`);
  }

  searchShoes(keyword: string, exactMatch: boolean = false): Observable<ShoeDTO[]> {
    let params = new HttpParams()
      .set('keyword', keyword)
      .set('exactMatch', String(exactMatch));
  
    return this.http.get<ShoeDTO[]>(`${this.apiUrl}/search`, { params });
  }
  
}
