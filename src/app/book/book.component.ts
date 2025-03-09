import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, output } from '@angular/core';
import { Book } from '../model/book';
import { clear } from 'node:console';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit,OnDestroy{
@Input() book: Book = {} as Book;
@Output() bookEmitter = new EventEmitter<Book>();

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
  this.bookEmitter.emit(this.book);
}
}
