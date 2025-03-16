import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CartComponent } from './books/cart/cart.component';

export const routes: Routes = [
    {path:'', component: BookComponent},
    {path:'cart', component: CartComponent}
];
