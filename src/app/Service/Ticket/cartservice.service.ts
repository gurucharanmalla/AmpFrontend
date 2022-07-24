import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public cartItemList : any =[]
  public activityList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public quantity : any;
  key:any

  constructor() { }

  getProducts()
  {
    return this.activityList.asObservable();
  }

  setProduct(activity : any){
    this.key=activity.activityId
    this.cartItemList.push(...activity);
    this.activityList.next(activity);
  }
  addtoCart(activity : any,){

        this.cartItemList.push(activity);
    this.activityList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }


  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.charges*this.quantity);
    })
    return grandTotal;
  }
  removeCartItem(activity: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(activity.activityId== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.activityList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.activityList.next(this.cartItemList);
  }

  getCartItems():any{

    return this.cartItemList
  }

}
