import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import {BookServiceService} from '../../services/book-service.service'



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookServiceService, private router: Router) { 
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {
  }
  action(id: number){
    this.books = this.books.filter((x)=> x.id !== id)
    console.log(this.books)
  }
  sample(){
    this.router.navigate(['/form', 2])
  }

}
