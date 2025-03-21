import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, output } from '@angular/core';
import { Book } from '../model/book';
import { clear } from 'node:console';
import { CartService } from '../books/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit,OnDestroy{
@Input() book: Book = {} as Book;
// @Output() bookEmitter = new EventEmitter<Book>();


constructor (private cartService:CartService){

}
isInCart : boolean =false;


myInterval: any =null;
ngOnInit(): void {
  this.myInterval =setInterval(
    ()=>{
      console.log("Book Component Initialized");
    }, 1000
  )
}
ngOnDestroy(): void {
  clearInterval(this.myInterval);
  console.log("Book Component Destroyed"); 
}
addToCard(){
  // console.log(this.book);
  // this.bookEmitter.emit(this.book);
  this.isInCart=true;
  this.cartService.add(this.book);
}
removeFromCart(){
  this.isInCart=false;
  this.cartService.remove(this.book);
}


}
