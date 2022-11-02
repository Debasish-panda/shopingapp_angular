import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([]); //it can act as a subscriber
  //productList act as a observable and also it will emit data
  constructor() { }
  getProduct(){ 
    return this.productList.asObservable(); //getter
  }

  setProduct(product : any){
    this.cartItemList.push(...product); //setter
    this.productList.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList) //when ever we will subscribe the product list
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal; // if we will not return it will through error in cart.component.ts file
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAll(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
