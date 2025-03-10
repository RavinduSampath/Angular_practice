import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { audit } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BookComponent } from "../book/book.component";
import { Book } from '../model/book';
import { log } from 'node:console';
import { BooksService } from './books.service';




@Component({
  selector: 'app-books',
  imports: [FormsModule, CommonModule, BookComponent],

  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit {
  // name: String ='Madolduva';
  // author: String='Matin wicramasinghe';
  // src: String='https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg';
  // price: number= 500;
   
  
  // bookService =  new BooksService(); meka venuvat thamai singalton use karanne

  constructor( private bookService: BooksService){
    console.log("constructor called");
    
    
  }
    
  ngOnInit(): void {
    console.log('Books Component Initialized');
    this.books =  this.bookService.getBooks();
  }  
  // ngOnChanges(){  
  //   console.log('Books Component Changed');
  // }
  // ngOnDestroy(){ 
  //   console.log('Books Component Destroyed');
  // }





  isDisabled: boolean = false; 
  
  handleClick(){
    // alert('Button Clicked');
    this.isDisabled = true;
  }
  myName: String = '';
  handleInput(event: any){
    console.log(event.target.value);
    this.myName = event.target.value;
  }
newname: String = '';

isShowing: boolean = false;



books: Book[] =[] ;

card: Book[]=[];
// addToCard(book: Book){
//   this.card.push(book);
//   console.log(this.card);
// }

}
