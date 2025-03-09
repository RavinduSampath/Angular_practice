import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: 'Madolduva',
        author: 'Matin wicramasinghe',
        src: 'https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg',
        price: 500
      },
      {
        name: 'Madolduva',
        author: 'Matin wicramasinghe',
        src: 'https://upload.wikimedia.org/wikipedia/en/5/53/Madol_Duwa_poster.jpg',
        price: 500
    
      },
      {
        name: 'Madolduva',
        author: 'Matin wicramasinghe',
        src: 'https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg',
        price: 500
      },
      {
        name: 'Madolduva',
        author: 'Matin wicramasinghe',
        src: 'https://upload.wikimedia.org/wikipedia/en/5/53/Madol_Duwa_poster.jpg',
        price: 500
    
      },
      
    ];
  }


}
