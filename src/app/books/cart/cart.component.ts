import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
getCart() {
throw new Error('Method not implemented.');
}
  constructor(private cartService: CartService) {
    
  }

}
