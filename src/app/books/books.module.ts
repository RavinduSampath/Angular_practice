import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';



@NgModule({
  imports: [
    CommonModule,
    CartComponent
  ],
  exports: [CartComponent] 
})
export class BooksModule { }
