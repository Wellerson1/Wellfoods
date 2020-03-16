import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/Cart-item";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'

@Injectable()

export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http){}

    cartItems(): CartItem[]{
        return this.cartService.items
    }

  itemsValue(): number{
    return this.cartService.total()
  }  
  increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
      }
      decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
      }
      remove(item: CartItem){
        this.cartService.removeItem(item)
      }

      clear(){
        this.cartService.clear();
      }

      checkOrder(order: Order): Observable<string>{
        
       const headers = new Headers()
       headers.append('Content-type', 'application/json')
       this.http.delete(`${MEAT_API}/orders`)
        return this.http.post(`${MEAT_API}/orders`, 
                    JSON.stringify(order), new RequestOptions({headers: headers}))
                    .map(response => response.json())
                    .map(order => order.id)

        
      }
}