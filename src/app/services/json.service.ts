import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllProducts(): Observable <any>{
    return this._http.get('http://localhost:4200/assets/productList.json')
  }

  getProduct(id:any): Observable <any>{
    return this._http.get<any>('http://localhost:4200/assets/productList.json')
  }
}
