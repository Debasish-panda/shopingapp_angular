import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  private apiurl="https://fakestoreapi.com/products/category/jewelery";

  getUserData(){
    return this.http.get<any>(this.apiurl).pipe(map((res:any)=>{
      return res;
    }))
    
  }
}
