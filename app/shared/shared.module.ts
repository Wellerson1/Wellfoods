import { NgModule, ModuleWithProviders } from "@angular/core";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { InputComponent } from "./input/input.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderService } from "app/order/order.service";
import { RestaurantService } from "app/restaurants/restaurant.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
                CommonModule, FormsModule, ReactiveFormsModule]

})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return{
            ngModule: SharedModule,
            providers: [OrderService, RestaurantService, ShoppingCartService]

        }
    }
}