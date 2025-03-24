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
    console.log(book);
    
  }
<<<<<<< HEAD

  getCart(){
    return this.cart;
  }
  remove(book: Book){
    this.cart = this.cart.filter((b)=>b != book);

  } 
=======
>>>>>>> parent of 974ceda (Merge pull request #3 from RavinduSampath/dev)


}
