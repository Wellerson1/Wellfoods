import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import  {RestaurantService} from '../../restaurants/restaurant.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'

})
export class MenuComponent implements OnInit {

  
  menu: Observable<MenuItem[]>
  constructor(private restaurantsService: RestaurantService, 
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id'])

  }


}