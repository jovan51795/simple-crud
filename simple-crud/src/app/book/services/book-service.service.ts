import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  constructor() { }

  book: Book[] = [
    {
      id: 1,
      name: "Angular tutorials",
      authors: [
        "jovanie",
        "cabatuan"
      ],
      isbn: 1234567810

    },
    {
      id: 2,
      name: "Java Zero to Hero",
      authors: [
        "jovanie",
        "cabatuan",
        "John",
        "jovanie",
        "cabatuan",
        "John"
      ],
      isbn: 1234567810

    },
    {
      id: 3,
      name: "React tutorials",
      authors: [
        "jovanie",
        "cabatuan"
      ],
      isbn: 1234567810
    },
   
  ];

  getBooks = () => {
    return this.book;
  }
    
    
}
