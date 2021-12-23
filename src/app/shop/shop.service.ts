import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../shared/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  url="https://nonchalant-fang.glitch.me/listing";

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.url);
  }
}
