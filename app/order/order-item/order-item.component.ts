import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/Cart-item';

@Component({
  selector: 'mt-order-item',
  templateUrl: './order-item.component.html',

})
export class OrderItemComponent implements OnInit {

  constructor() { }

  @Input() items: CartItem[]
  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item)
  }
  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }
  emitRemove(item: CartItem){
    this.remove.emit(item)
  }
}
