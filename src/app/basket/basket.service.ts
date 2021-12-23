import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Basket, IBasket, IBasketItem } from '../shared/models/Basket';
import { IProduct } from '../shared/models/IProduct';
import { BasketRoutingModule } from './basket-routing.module';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  url="https://nonchalant-fang.glitch.me/order";
  listBasket="https://nonchalant-fang.glitch.me/listing";
   basketSource: BehaviorSubject<any>=new BehaviorSubject([]);
  basket$=this.basketSource.asObservable();

  // constructor(private http:HttpClient) { }

  // setBasket(basket:IBasket){
  //   return this.http.post(this.url,basket).subscribe((response:IBasket)=>{

  //   })
  // }

  addItemToBasket(item:IProduct,quantity=1){
    const itemToAdd:IBasketItem=this.mapProductItemToBasketItem(item,quantity);
    const basket=this.getCurrenBasketValue() ?? this.createBasket();
    basket.items.push(itemToAdd);
  }


  private createBasket(): IBasket {
    const newBasket=new Basket();
    localStorage.setItem('basket_id',newBasket.id.toString());
    return newBasket
  }

  private getCurrenBasketValue() {
    return this.basketSource.value;
  }


  private mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id:item.id,
      productName:item.name,
      price:Number(item.price),
      image:item.image,
      quantity:quantity
    }
  }
}
