import {v4 as uuidv4} from 'uuid';


export interface IBasket{
    id:number;
    items:IBasketItem[];
}
export interface IBasketItem{
    id:number;
    productName:string;
    price:number;
    quantity:number;
    image:string;
}

export class Basket implements IBasket{
    id: number=0;
    items: IBasketItem[]=[];

    
    
}