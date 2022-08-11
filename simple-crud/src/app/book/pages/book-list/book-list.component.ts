import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import {BookServiceService} from '../../services/book-service.service'



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor() { 
    this.books = new BookServiceService().getBooks();
  }

  ngOnInit(): void {
  }
  action(data: object){
    console.log(data)
  }

}
