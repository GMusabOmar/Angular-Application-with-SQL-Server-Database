import { Injectable } from '@angular/core';
import { IProduct, ISlider } from './general-objects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class clsItemService {
  constructor(private http: HttpClient) {}
  GetAllData(): Observable<IProduct[]> {
    let APiURL: string = 'http://localhost:5157/api/OnlineStore/GetAllProduct';
    return this.http.get<IProduct[]>(APiURL);
  }
  GetDataByID(id: number): Observable<IProduct> {
    let APiURL: string = 'http://localhost:5157/api/OnlineStore/GetAllProduct/' + id;
    return this.http.get<IProduct>(APiURL);
  }
  GetAllSlider(): Observable<ISlider[]> {
    let APiURL: string = 'http://localhost:5157/api/OnlineStore/GetAllSlider';
    return this.http.get<ISlider[]>(APiURL);
  }
}
