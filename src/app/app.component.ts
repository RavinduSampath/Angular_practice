import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from "./books/books.component";
import { FormsModule } from '@angular/forms';
import { BookComponent } from "./book/book.component";
import { CartComponent } from "./books/cart/cart.component"; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ BooksComponent, FormsModule, HomeComponent, CartComponent], // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testing-app';
  
}
