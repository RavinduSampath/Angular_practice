import { Injectable } from '@angular/core';
import { Book } from '../../model/book';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart: Array<Book> =[];
  cart : Book[] = [];


  constructor() { }

  add(book: Book){
    // console.log(book);
    this.cart.push(book);
    console.log(this.cart);
    
  }
  getCart(){
    return this.cart;
  }


}
